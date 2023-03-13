import Subjects from "./subjects";

export default interface OrderCanceledUserEvent {
  subject: Subjects.OrderCanceledUser;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
