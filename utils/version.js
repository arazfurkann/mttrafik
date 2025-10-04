// Version utility for cache busting
export const getVersion = () => {
  return '1.0.0'
}

export const getBuildDate = () => {
  return new Date().toISOString()
}

export const getCacheBuster = () => {
  return `?v=${getVersion()}&t=${Date.now()}`
}

// Function to update version in all files
export const updateVersion = (newVersion) => {
  // This function can be used to programmatically update version
  console.log(`Updating version to: ${newVersion}`)
  return newVersion
}

// Version history
export const versionHistory = [
  { version: '1.0.0', date: '2024-01-01', changes: 'Initial release with full functionality' }
]
