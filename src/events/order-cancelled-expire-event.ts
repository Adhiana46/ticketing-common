import Subjects from "./subjects";

export default interface OrderCancelledExpireEvent {
  subject: Subjects.OrderCanceledExpire;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
