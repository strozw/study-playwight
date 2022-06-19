import { test as baseTest } from '@playwright/test'
import {
  fixtures,
  TestingLibraryFixtures,
} from '@playwright-testing-library/test/fixture'

// Alternatively, with other fixtures
interface Fixtures extends TestingLibraryFixtures {
  // ... additional fixture types
}

export const test = baseTest.extend<Fixtures>({
  ...fixtures,
  // ... additional fixtures
})

export const { expect, describe, beforeAll, beforeEach, afterAll, afterEach } =
  test

export default test
