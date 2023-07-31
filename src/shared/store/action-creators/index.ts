import * as UserActionCreators from './user'
import * as AlertActionCreators from './alert'
import * as TrainingActionCreators from './training'
import * as TimerActionCreators from './timer'

export default {
    ...UserActionCreators,
    ...AlertActionCreators,
    ...TrainingActionCreators,
    ...TimerActionCreators

}