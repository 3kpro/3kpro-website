import { readFileSync } from 'fs';
import path from 'path';

export function getMarkdown(filePath: string): string {
  try {
    const fullPath = path.resolve(filePath);
    return readFileSync(fullPath, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return 'Error loading content';
  }
}