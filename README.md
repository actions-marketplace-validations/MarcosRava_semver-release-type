# semver-release-type

Action to return release type between two version (semver)

## Inputs

| input             | required | description                        | default     | type   |
| ----------------- | -------- | ---------------------------------- | ----------- | ------ |
| `current_version` | `true`   | The current version of the project | `undefined` | string |
| `next_version`    | `true`   | The next version of the project    | `undefined` | string |

## Outputs

| output            | description                          | type   |
| ----------------- | ------------------------------------ | ------ |
| `release_type`    | The release type of the next version | string |
| `current_version` | The current version of the project   | string |
| `next_version`    | The next version of the project      | string |

## Example usage

```yml
- uses: MarcosRava/semver-release-type@v1
  id: semver-release-type
  with:
    current_version: 'v0.0.1'
    next_version: 'v0.0.2'

  - name: Print the release type
    run: echo ${{ steps.semver-release-type.outputs.release_type }} # => 'patch'
```
