export interface SSRLCCResponse {
  Response: {
    TraceId: string; // Mandatory
    ResponseStatus: string; // Mandatory [NotSet = 0, Successful = 1, Failed = 2, InvalidRequest = 3, InvalidSession = 4, InvalidCredentials = 5]
    Baggage: [[Baggage]]; // Baggage[]
    MealDynamic: [[MealDynamic]]; // MealDynamic[]
    SeatDynamic: [[SeatDynamic]]; // SeatDynamic[]
    Error: Error; // Error
  }
  }
export interface Baggage {
    wayType: number; // Mandatory [NotSet = 0, Segment = 1, FullJourney = 2]
    code: string; // Mandatory
    weight: string; // Mandatory
    currency: string; // Mandatory
    price: number; // Mandatory
    origin: string; // Mandatory
    destination: string; // Mandatory
    airlineCode: string; // Mandatory
    flightNumber: string; // Mandatory
    description: string; // Mandatory [NotSet = 0, Included = 1, Direct = 2, Imported = 3, Upgrade = 4, ImportedUpgrade = 5]
    text?: string; // Optional detailed description
  }
export interface MealDynamic {
    wayType: number; // Mandatory [Segment = 1, FullJourney = 2]
    code: string; // Mandatory
    description: string; // Mandatory [Included = 1, Direct = 2, Imported = 3]
    airlineDescription: string; // Mandatory
    quantity: string; // Mandatory
    price: number; // Mandatory
    currency: string; // Mandatory
    origin: string; // Mandatory
    destination: string; // Mandatory
    airlineCode: string; // Mandatory
    flightNumber: string; // Mandatory
  }
export interface SeatDynamic {
    segmentSeat: SegmentSeat[]; // Mandatory SegmentSeat[]
  }
export interface SegmentSeat {
    rowSeats: RowSeats[]; // RowSeats[]
  }
export interface RowSeats {
    seats: Seat[]; // Seats[]
  }
export interface Seat {
    airlineCode: string; // Mandatory
    flightNumber: string; // Mandatory
    craftType: string; // Mandatory
    origin: string; // Mandatory
    destination: string; // Mandatory
    availabilityType: string; // Mandatory [NotSet = 0, Open = 1, Reserved = 3, Blocked = 4, NoSeatAtThisLocation = 5]
    description: string; // Mandatory [Included = 1, Purchase = 2]
    code: string; // Mandatory
    rowNo: string; // Mandatory
    seatNo: string; // Mandatory
    seatType: string; // Mandatory [Window = 1, Aisle = 2, Middle = 3]
    seatWayType: string; // Mandatory [Segment = 1, FullJourney = 2]
    compartment: string; // Mandatory [Compartment1 = 1, Compartment2 = 2, Compartment3 = 3]
    deck: string; // Mandatory [Deck1 = 1, Deck2 = 2, Deck3 = 3]
    currency: string; // Mandatory
    price: number; // Mandatory
  }
export interface Error {
    errorCode: number; // Mandatory
    errorMessage: string; // Mandatory (will be blank if ErrorCode = 0)
  }
       
   