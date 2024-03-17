import { Preview } from '_/sections/Preview'
import { IntegrationOptions } from '_/sections/IntegrationOptions'
import { FeatureSandbox } from '_/sections/FeatureSandbox'
import { UseCases } from '_/sections/UseСases'
import '_styles/main.scss'

export const App = () => {
  return (
    <>
      <Preview />
      <UseCases />
      <IntegrationOptions />
      <FeatureSandbox />
    </>
  )
}
