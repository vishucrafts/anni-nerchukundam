import {mocked} from 'ts-jest/utils'

import SoundPlayer from '../sound-player'
import SoundPlayerConsumer from '../sound-player-consumer'

jest.mock('../sound-player') // SoundPlayer is now a mock constructor

const mockedSoundPlayer = mocked(SoundPlayer, true)

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mockedSoundPlayer.mockClear()
})

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer()
  expect(mockedSoundPlayer).toHaveBeenCalledTimes(1)
})

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(mockedSoundPlayer).not.toHaveBeenCalled()

  const soundPlayerConsumer = new SoundPlayerConsumer()
  // Constructor should have been called again:
  expect(mockedSoundPlayer).toHaveBeenCalledTimes(1)

  const coolSoundFileName = 'song.mp3'
  soundPlayerConsumer.playSomethingCool()

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = mockedSoundPlayer.mock.instances[0]
  const playSoundFile = mockSoundPlayerInstance.playSoundFile
  const mockPlaySoundFile = mocked(playSoundFile, true)
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName)
  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName)
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1)
})
