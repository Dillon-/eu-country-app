import API from 'config/API';

const getRegionalBloc = async (id, fields = ['name']) => {
  const serializedFields = fields.join(';');
  
  const response = await API.get(`/regionalbloc/${id}?fields=${serializedFields}`);
  return response.data; 
}

export { getRegionalBloc };
