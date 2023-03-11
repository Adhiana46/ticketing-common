export enum OrderStatus {
  // When the order has been created, but the ticket is not been reserved
  Created = "created",

  // when the ticket has already been reserved (race condition)
  CanceledAlreadyReserved = "cancelled:already-reserved",

  // when the user cancelled the order
  CancelledUser = "cancelled:user",

  // when the order expires before payment
  CancelledExpires = "cancelled:expires",

  // the order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // the order has reserved the ticket and user has made a payment
  Complete = "complete",
}
