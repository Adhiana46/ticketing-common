enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",

  OrderCreated = "order:created",
  OrderCanceledUser = "order:canceled-user",
  OrderCanceledExpire = "order:canceled-expire",

  ExpirationComplete = "expiration:complete",
}

export default Subjects;
