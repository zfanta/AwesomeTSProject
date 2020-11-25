import Realm from 'realm';
import Room from './Room';
import RoomUser from './RoomUser';

class Message {
  public static schema: Realm.ObjectSchema = {
    name: 'Message',
    properties: {
      room: 'Room',
      sender: 'RoomUser',
      data: 'string',
      createdAt: {
        type: 'string',
        indexed: true,
      },
    },
  };

  public room: Room;
  public sender: RoomUser;
  public data: string;
  public createdAt: string;

  constructor(room: Room, sender: RoomUser, data: string, createdAt: string) {
    this.room = room;
    this.sender = sender;
    this.data = data;
    this.createdAt = createdAt;
  }
}

export default Message;
