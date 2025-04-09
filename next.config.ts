import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { // Add this images block
    unoptimized: true
  }
}

export default nextConfig
