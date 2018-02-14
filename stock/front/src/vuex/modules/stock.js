import moment from 'moment'
import { UPDATEDATE, UPDATECODE } from './../type'

export default {
	state: {
		codeOrName: '',
    dateSection: [moment().subtract(2, 'days').format('YYYY-MM-DD'), moment().subtract(1,'days').format('YYYY-MM-DD')]
	},
	mutations: {
		[UPDATEDATE](state, action) {
			state.dateSection = action.dateSection
		},
		[UPDATECODE](state, action){
			console.log(action.codeOrName )
      state.codeOrName  = action.codeOrName 
		}
	},
	actions: {
		[UPDATEDATE]({ commit }, dateSection){
      commit(UPDATEDATE, { dateSection })
		},
		[UPDATECODE]({ commit }, codeOrName){
      commit(UPDATECODE, { codeOrName })
		}
	}
}