import api from '@/services/api'
import * as _ from 'lodash'

export default {
  async POST_CONTACT({}, { contact }) {
    return await api.post('action.php', contact)
  },
}
