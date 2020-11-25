import Realm, {List, Object} from 'realm';
import Room from './Room';
import Message from './Message';

class RoomUser {
  public static schema: Realm.ObjectSchema = {
    name: 'RoomUser',
    primaryKey: 'pk',
    properties: {
      pk: 'string',
      room: 'Room',
      name: 'string',
      messages: {
        type: 'linkingObjects',
        objectType: 'Message',
        property: 'sender',
      },
    },
  };

  public pk: string;
  public room: Room;
  public name: string;
  public messages: List<Message & Object>;

  constructor(
    pk: string,
    room: Room,
    name: string,
    messages: List<Message & Object>,
  ) {
    this.pk = pk;
    this.room = room;
    this.name = name;
    this.messages = messages;
  }

  public static create(
    realm: Realm,
    pk: string,
    name: string,
    room: Room,
  ): RoomUser {
    return realm.create<RoomUser>(RoomUser.schema.name, {
      pk,
      name,
      room,
      messages: [],
    });
  }
}

export default RoomUser;
