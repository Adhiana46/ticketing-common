import Subjects from "./subjects";

export default interface OrderCancelledUserEvent {
  subject: Subjects.OrderCanceledUser;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
