export default function createFetchSagaPattern (name){
  return (action) =>
    action.type === 'FETCH_API' && action.payload.name === name;
}
