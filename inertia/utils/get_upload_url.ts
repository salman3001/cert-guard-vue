export const getUploadUrl = (url: string | null | undefined) => {
  return url ? '/uploads/' + url : '/no-image.jpg'
}
