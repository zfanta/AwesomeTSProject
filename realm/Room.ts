import Realm, {List, Object} from 'realm';
import Message from './Message';
import RoomUser from './RoomUser';

class Room {
  public static schema: Realm.ObjectSchema = {
    name: 'Room',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      description: {
        type: 'string',
        optional: true,
      },
      messages: {
        type: 'linkingObjects',
        objectType: 'Message',
        property: 'room',
      },
      users: {
        type: 'linkingObjects',
        objectType: 'RoomUser',
        property: 'room',
      },
    },
  };

  public id: string;
  public name: string;
  public description?: string;
  public messages: List<Message & Object>;
  public users: List<RoomUser & Object>;

  constructor(
    id: string,
    name: string,
    description: string,
    message: List<Message & Object>,
    users: List<RoomUser & Object>,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.messages = message;
    this.users = users;
  }

  public static create(
    realm: Realm,
    id: string,
    name: string,
    description?: string,
  ): Room {
    return realm.create<Room>(Room.schema.name, {
      id,
      name,
      description,
      users: [],
      messages: [],
    });
  }
}

export default Room;
