import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE'
export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export const produceReducer = (state = {}, action) => {
    console.log("&&&&&&& produce", state);
    switch (action.type) {
        case POPULATE:
            const newState = {}
            action.produce.forEach((item) => {
                newState[item.id] = item;
            });
            // console.log("#######", newState);
            return newState;
        default:
            return state;
    }
}
