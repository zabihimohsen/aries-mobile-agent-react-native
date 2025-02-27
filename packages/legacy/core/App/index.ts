/* eslint-disable import/no-cycle */
import type { OnboardingStyleSheet } from './screens/Onboarding'

import { Agent } from '@aries-framework/core'
import AgentProvider from '@aries-framework/react-hooks'

import indyLedgers from '../configs/ledgers/indy'

import * as components from './components'
import Button, { ButtonType } from './components/buttons/Button'
import HeaderButton, { ButtonLocation } from './components/buttons/HeaderButton'
import CheckBoxRow from './components/inputs/CheckBoxRow'
import ContentGradient from './components/misc/ContentGradient'
import CredentialCard from './components/misc/CredentialCard'
import InfoBox, { InfoBoxType } from './components/misc/InfoBox'
import ErrorModal from './components/modals/ErrorModal'
import NetInfo from './components/network/NetInfo'
import Record from './components/record/Record'
import InfoTextBox from './components/texts/InfoTextBox'
import Link from './components/texts/Link'
import { ToastType } from './components/toast/BaseToast'
import toastConfig from './components/toast/ToastConfig'
import { AttachTourStep } from './components/tour/AttachTourStep'
import { credentialOfferTourSteps } from './components/tour/CredentialOfferTourSteps'
import { credentialsTourSteps } from './components/tour/CredentialsTourSteps'
import { homeTourSteps } from './components/tour/HomeTourSteps'
import { proofRequestTourSteps } from './components/tour/ProofRequestTourSteps'
import { TourBox } from './components/tour/TourBox'
import HomeFooterView from './components/views/HomeFooterView'
import * as contexts from './contexts'
import { AuthProvider } from './contexts/auth'
import { CommonUtilProvider } from './contexts/commons'
import { NetworkProvider } from './contexts/network'
import { useTour } from './contexts/tour/tour-context'
import { TourProvider } from './contexts/tour/tour-provider'
import { defaultConfiguration } from './defaultConfiguration'
import RootStack from './navigators/RootStack'
import AttemptLockout from './screens/AttemptLockout'
import Developer from './screens/Developer'
import OnboardingPages from './screens/OnboardingPages'
import Preface from './screens/Preface'
import Splash from './screens/Splash'
import Terms from './screens/Terms'
import UseBiometry from './screens/UseBiometry'
import * as types from './types'

export { LocalStorageKeys } from './constants'
export { initLanguages, initStoredLanguage, translationResources, Locales } from './localization'
export { ConfigurationProvider, useConfiguration } from './contexts/configuration'
export { defaultState, mergeReducers, StoreProvider, StoreContext, useStore } from './contexts/store'
export { default as Store, DispatchAction, reducer } from './contexts/reducers/store'
export { Assets as ImageAssets } from './theme'
export { ThemeProvider, useTheme } from './contexts/theme'
export { AnimatedComponentsProvider, useAnimatedComponents } from './contexts/animated-components'
export { ColorPallet } from './theme'
export { animatedComponents } from './animated-components'
export { theme } from './theme'
export { useAuth } from './contexts/auth'
export { NavigationTheme } from './theme'
export { testIdWithKey, testIdForAccessabilityLabel } from './utils/testable'
export { Screens, Stacks, TabStacks } from './types/navigators'
export { createStyles } from './screens/OnboardingPages'
export { statusBarStyleForColor, StatusBarStyles } from './utils/luminance'
export { BifoldError } from './types/error'
export { EventTypes } from './constants'
export { didMigrateToAskar, migrateToAskar } from './utils/migration'
export { createLinkSecretIfRequired, getAgentModules } from './utils/agent'

export type { AnimatedComponents } from './animated-components'
export type {
  ISVGAssets,
  IFontAttributes,
  IInputAttributes,
  IInputs,
  ITextTheme,
  IBrandColors,
  ISemanticColors,
  INotificationColors,
  IGrayscaleColors,
  IColorPallet,
  IAssets,
  ITheme,
} from './theme'
export type { ConfigurationContext } from './contexts/configuration'
export type { TourStep } from './contexts/tour/tour-context'
export type { GenericFn } from './types/fn'
export type { AuthenticateStackParams, OnboardingStackParams } from './types/navigators'
export type { OnboardingStyleSheet }
export type { WalletSecret } from './types/security'
export type { ReducerAction } from './contexts/reducers/store'
export type {
  State,
  Onboarding as OnboardingState,
  LoginAttempt as LoginAttemptState,
  Preferences as PreferencesState,
  Migration as MigrationState,
  Tours as ToursState,
} from './types/state'
export * from '../verifier'

export {
  indyLedgers,
  Agent,
  CommonUtilProvider,
  AgentProvider,
  AuthProvider,
  NetworkProvider,
  TourProvider,
  useTour,
  AttachTourStep,
  TourBox,
  homeTourSteps,
  credentialsTourSteps,
  credentialOfferTourSteps,
  proofRequestTourSteps,
  Button,
  ButtonType,
  HeaderButton,
  ButtonLocation,
  CheckBoxRow,
  CredentialCard,
  ContentGradient,
  ErrorModal,
  InfoTextBox,
  InfoBox,
  InfoBoxType,
  Link,
  ToastType,
  toastConfig,
  RootStack,
  NetInfo,
  OnboardingPages,
  Splash,
  Developer,
  Terms,
  Preface,
  HomeFooterView as HomeContentView,
  UseBiometry,
  AttemptLockout,
  Record,
  defaultConfiguration,
  types,
  components,
  contexts,
}
