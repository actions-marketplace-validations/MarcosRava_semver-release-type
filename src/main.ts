import * as core from '@actions/core'
import semver from 'semver'

async function run(): Promise<void> {
  try {
    const currentVersion: string = core.getInput('current_version')
    const nextVersion: string = core.getInput('next_version')
    core.debug(`${currentVersion} -> ${nextVersion}`)
    const releaseType = semver.diff(currentVersion, nextVersion)
    core.setOutput('release_type', releaseType)
    core.setOutput('next_version', nextVersion)
    core.setOutput('current_version', currentVersion)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
