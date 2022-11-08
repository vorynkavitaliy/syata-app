import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        server: {
            host: env.HOST || 'localhost',
            port: env.PORT || '4200',
        }
    }
})
