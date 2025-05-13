
// Merges multiple class names into a single string
export function cn(...inputs: any[]): string {
  return inputs.filter(Boolean).join(' ')
}
