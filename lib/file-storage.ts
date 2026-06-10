import { mkdir, writeFile, copyFile, unlink } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const publicDir = path.join(process.cwd(), "public");
const uploadsDir = path.join(publicDir, "uploads");

export async function ensureUploadsDir() {
  await mkdir(uploadsDir, { recursive: true });
}

export async function saveUploadedFile(file: File) {
  await ensureUploadsDir();
  const bytes = Buffer.from(await file.arrayBuffer());
  const safeName = `${Date.now()}-${randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const absolutePath = path.join(uploadsDir, safeName);
  await writeFile(absolutePath, bytes);
  return {
    filename: file.name,
    storageUrl: `/uploads/${safeName}`
  };
}

export async function duplicateStoredFile(storageUrl: string) {
  await ensureUploadsDir();
  const sourceName = storageUrl.replace(/^\//, "");
  const sourcePath = path.join(publicDir, sourceName);
  const ext = path.extname(sourcePath);
  const basename = path.basename(sourcePath, ext);
  const newName = `${basename}-v${Date.now()}${ext}`;
  const destinationPath = path.join(uploadsDir, newName);
  await copyFile(sourcePath, destinationPath);
  return {
    storageUrl: `/uploads/${newName}`
  };
}

export async function removeStoredFile(storageUrl: string) {
  const sourceName = storageUrl.replace(/^\//, "");
  const sourcePath = path.join(publicDir, sourceName);
  try {
    await unlink(sourcePath);
  } catch {
    // ignore
  }
}
