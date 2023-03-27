import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production'
  }
})
