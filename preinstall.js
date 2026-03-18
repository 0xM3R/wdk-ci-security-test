// Security test: check if NODE_AUTH_TOKEN is available during npm install
// This replicates exactly what mafintosh tested on wdk-wallet-spark PR #67

const token = process.env.NODE_AUTH_TOKEN || ''
const hasToken = token.length > 0

console.log('=== CI Security Boundary Test ===')
console.log('checking if build token', hasToken, token.length)
console.log('CI environment:', process.env.CI ? 'yes' : 'no')
console.log('GitHub Actions:', process.env.GITHUB_ACTIONS ? 'yes' : 'no')
console.log('Event name:', process.env.GITHUB_EVENT_NAME || 'unknown')
console.log('Repository:', process.env.GITHUB_REPOSITORY || 'unknown')
console.log('Actor:', process.env.GITHUB_ACTOR || 'unknown')
console.log('=== End Test ===')

// Cache poison test: this change triggers a fork PR to test cache boundary isolation
