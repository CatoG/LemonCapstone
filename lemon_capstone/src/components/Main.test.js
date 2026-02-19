import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the default available time slots', () => {
  const expected = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  expect(initializeTimes()).toEqual(expected);
});

test('updateTimes returns the same state for an UPDATE_TIMES action', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2026-03-01' };
  expect(updateTimes(currentState, action)).toEqual(currentState);
});
