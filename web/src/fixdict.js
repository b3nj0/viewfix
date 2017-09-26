const fixdict = {
  "messages": {
    "0": {
      "name": "Heartbeat",
      "msgtype": "0",
      "msgcat": "admin"
    },
    "1": {
      "name": "TestRequest",
      "msgtype": "1",
      "msgcat": "admin"
    },
    "2": {
      "name": "ResendRequest",
      "msgtype": "2",
      "msgcat": "admin"
    },
    "3": {
      "name": "Reject",
      "msgtype": "3",
      "msgcat": "admin"
    },
    "4": {
      "name": "SequenceReset",
      "msgtype": "4",
      "msgcat": "admin"
    },
    "5": {
      "name": "Logout",
      "msgtype": "5",
      "msgcat": "admin"
    },
    "6": {
      "name": "IOI",
      "msgtype": "6",
      "msgcat": "app"
    },
    "7": {
      "name": "Advertisement",
      "msgtype": "7",
      "msgcat": "app"
    },
    "8": {
      "name": "ExecutionReport",
      "msgtype": "8",
      "msgcat": "app"
    },
    "9": {
      "name": "OrderCancelReject",
      "msgtype": "9",
      "msgcat": "app"
    },
    "A": {
      "name": "Logon",
      "msgtype": "A",
      "msgcat": "admin"
    },
    "AA": {
      "name": "DerivativeSecurityList",
      "msgtype": "AA",
      "msgcat": "app"
    },
    "AB": {
      "name": "NewOrderMultileg",
      "msgtype": "AB",
      "msgcat": "app"
    },
    "AC": {
      "name": "MultilegOrderCancelReplace",
      "msgtype": "AC",
      "msgcat": "app"
    },
    "AD": {
      "name": "TradeCaptureReportRequest",
      "msgtype": "AD",
      "msgcat": "app"
    },
    "AE": {
      "name": "TradeCaptureReport",
      "msgtype": "AE",
      "msgcat": "app"
    },
    "AF": {
      "name": "OrderMassStatusRequest",
      "msgtype": "AF",
      "msgcat": "app"
    },
    "AG": {
      "name": "QuoteRequestReject",
      "msgtype": "AG",
      "msgcat": "app"
    },
    "AH": {
      "name": "RFQRequest",
      "msgtype": "AH",
      "msgcat": "app"
    },
    "AI": {
      "name": "QuoteStatusReport",
      "msgtype": "AI",
      "msgcat": "app"
    },
    "AJ": {
      "name": "QuoteResponse",
      "msgtype": "AJ",
      "msgcat": "app"
    },
    "AK": {
      "name": "Confirmation",
      "msgtype": "AK",
      "msgcat": "app"
    },
    "AL": {
      "name": "PositionMaintenanceRequest",
      "msgtype": "AL",
      "msgcat": "app"
    },
    "AM": {
      "name": "PositionMaintenanceReport",
      "msgtype": "AM",
      "msgcat": "app"
    },
    "AN": {
      "name": "RequestForPositions",
      "msgtype": "AN",
      "msgcat": "app"
    },
    "AO": {
      "name": "RequestForPositionsAck",
      "msgtype": "AO",
      "msgcat": "app"
    },
    "AP": {
      "name": "PositionReport",
      "msgtype": "AP",
      "msgcat": "app"
    },
    "AQ": {
      "name": "TradeCaptureReportRequestAck",
      "msgtype": "AQ",
      "msgcat": "app"
    },
    "AR": {
      "name": "TradeCaptureReportAck",
      "msgtype": "AR",
      "msgcat": "app"
    },
    "AS": {
      "name": "AllocationReport",
      "msgtype": "AS",
      "msgcat": "app"
    },
    "AT": {
      "name": "AllocationReportAck",
      "msgtype": "AT",
      "msgcat": "app"
    },
    "AU": {
      "name": "ConfirmationAck",
      "msgtype": "AU",
      "msgcat": "app"
    },
    "AV": {
      "name": "SettlementInstructionRequest",
      "msgtype": "AV",
      "msgcat": "app"
    },
    "AW": {
      "name": "AssignmentReport",
      "msgtype": "AW",
      "msgcat": "app"
    },
    "AX": {
      "name": "CollateralRequest",
      "msgtype": "AX",
      "msgcat": "app"
    },
    "AY": {
      "name": "CollateralAssignment",
      "msgtype": "AY",
      "msgcat": "app"
    },
    "AZ": {
      "name": "CollateralResponse",
      "msgtype": "AZ",
      "msgcat": "app"
    },
    "B": {
      "name": "News",
      "msgtype": "B",
      "msgcat": "app"
    },
    "BA": {
      "name": "CollateralReport",
      "msgtype": "BA",
      "msgcat": "app"
    },
    "BB": {
      "name": "CollateralInquiry",
      "msgtype": "BB",
      "msgcat": "app"
    },
    "BC": {
      "name": "NetworkCounterpartySystemStatusRequest",
      "msgtype": "BC",
      "msgcat": "app"
    },
    "BD": {
      "name": "NetworkCounterpartySystemStatusResponse",
      "msgtype": "BD",
      "msgcat": "app"
    },
    "BE": {
      "name": "UserRequest",
      "msgtype": "BE",
      "msgcat": "app"
    },
    "BF": {
      "name": "UserResponse",
      "msgtype": "BF",
      "msgcat": "app"
    },
    "BG": {
      "name": "CollateralInquiryAck",
      "msgtype": "BG",
      "msgcat": "app"
    },
    "BH": {
      "name": "ConfirmationRequest",
      "msgtype": "BH",
      "msgcat": "app"
    },
    "BI": {
      "name": "TradingSessionListRequest",
      "msgtype": "BI",
      "msgcat": "app"
    },
    "BJ": {
      "name": "TradingSessionList",
      "msgtype": "BJ",
      "msgcat": "app"
    },
    "BK": {
      "name": "SecurityListUpdateReport",
      "msgtype": "BK",
      "msgcat": "app"
    },
    "BL": {
      "name": "AdjustedPositionReport",
      "msgtype": "BL",
      "msgcat": "app"
    },
    "BM": {
      "name": "AllocationInstructionAlert",
      "msgtype": "BM",
      "msgcat": "app"
    },
    "BN": {
      "name": "ExecutionAcknowledgement",
      "msgtype": "BN",
      "msgcat": "app"
    },
    "BO": {
      "name": "ContraryIntentionReport",
      "msgtype": "BO",
      "msgcat": "app"
    },
    "BP": {
      "name": "SecurityDefinitionUpdateReport",
      "msgtype": "BP",
      "msgcat": "app"
    },
    "BQ": {
      "name": "SettlementObligationReport",
      "msgtype": "BQ",
      "msgcat": "app"
    },
    "BR": {
      "name": "DerivativeSecurityListUpdateReport",
      "msgtype": "BR",
      "msgcat": "app"
    },
    "BS": {
      "name": "TradingSessionListUpdateReport",
      "msgtype": "BS",
      "msgcat": "app"
    },
    "BT": {
      "name": "MarketDefinitionRequest",
      "msgtype": "BT",
      "msgcat": "app"
    },
    "BU": {
      "name": "MarketDefinition",
      "msgtype": "BU",
      "msgcat": "app"
    },
    "BV": {
      "name": "MarketDefinitionUpdateReport",
      "msgtype": "BV",
      "msgcat": "app"
    },
    "BW": {
      "name": "ApplicationMessageRequest",
      "msgtype": "BW",
      "msgcat": "app"
    },
    "BX": {
      "name": "ApplicationMessageRequestAck",
      "msgtype": "BX",
      "msgcat": "app"
    },
    "BY": {
      "name": "ApplicationMessageReport",
      "msgtype": "BY",
      "msgcat": "app"
    },
    "BZ": {
      "name": "OrderMassActionReport",
      "msgtype": "BZ",
      "msgcat": "app"
    },
    "C": {
      "name": "Email",
      "msgtype": "C",
      "msgcat": "app"
    },
    "CA": {
      "name": "OrderMassActionRequest",
      "msgtype": "CA",
      "msgcat": "app"
    },
    "CB": {
      "name": "UserNotification",
      "msgtype": "CB",
      "msgcat": "app"
    },
    "CC": {
      "name": "StreamAssignmentRequest",
      "msgtype": "CC",
      "msgcat": "app"
    },
    "CD": {
      "name": "StreamAssignmentReport",
      "msgtype": "CD",
      "msgcat": "app"
    },
    "CE": {
      "name": "StreamAssignmentReportACK",
      "msgtype": "CE",
      "msgcat": "app"
    },
    "D": {
      "name": "NewOrderSingle",
      "msgtype": "D",
      "msgcat": "app"
    },
    "E": {
      "name": "NewOrderList",
      "msgtype": "E",
      "msgcat": "app"
    },
    "F": {
      "name": "OrderCancelRequest",
      "msgtype": "F",
      "msgcat": "app"
    },
    "G": {
      "name": "OrderCancelReplaceRequest",
      "msgtype": "G",
      "msgcat": "app"
    },
    "H": {
      "name": "OrderStatusRequest",
      "msgtype": "H",
      "msgcat": "app"
    },
    "J": {
      "name": "AllocationInstruction",
      "msgtype": "J",
      "msgcat": "app"
    },
    "K": {
      "name": "ListCancelRequest",
      "msgtype": "K",
      "msgcat": "app"
    },
    "L": {
      "name": "ListExecute",
      "msgtype": "L",
      "msgcat": "app"
    },
    "M": {
      "name": "ListStatusRequest",
      "msgtype": "M",
      "msgcat": "app"
    },
    "N": {
      "name": "ListStatus",
      "msgtype": "N",
      "msgcat": "app"
    },
    "P": {
      "name": "AllocationInstructionAck",
      "msgtype": "P",
      "msgcat": "app"
    },
    "Q": {
      "name": "DontKnowTrade",
      "msgtype": "Q",
      "msgcat": "app"
    },
    "R": {
      "name": "QuoteRequest",
      "msgtype": "R",
      "msgcat": "app"
    },
    "S": {
      "name": "Quote",
      "msgtype": "S",
      "msgcat": "app"
    },
    "T": {
      "name": "SettlementInstructions",
      "msgtype": "T",
      "msgcat": "app"
    },
    "V": {
      "name": "MarketDataRequest",
      "msgtype": "V",
      "msgcat": "app"
    },
    "W": {
      "name": "MarketDataSnapshotFullRefresh",
      "msgtype": "W",
      "msgcat": "app"
    },
    "X": {
      "name": "MarketDataIncrementalRefresh",
      "msgtype": "X",
      "msgcat": "app"
    },
    "Y": {
      "name": "MarketDataRequestReject",
      "msgtype": "Y",
      "msgcat": "app"
    },
    "Z": {
      "name": "QuoteCancel",
      "msgtype": "Z",
      "msgcat": "app"
    },
    "a": {
      "name": "QuoteStatusRequest",
      "msgtype": "a",
      "msgcat": "app"
    },
    "b": {
      "name": "MassQuoteAcknowledgement",
      "msgtype": "b",
      "msgcat": "app"
    },
    "c": {
      "name": "SecurityDefinitionRequest",
      "msgtype": "c",
      "msgcat": "app"
    },
    "d": {
      "name": "SecurityDefinition",
      "msgtype": "d",
      "msgcat": "app"
    },
    "e": {
      "name": "SecurityStatusRequest",
      "msgtype": "e",
      "msgcat": "app"
    },
    "f": {
      "name": "SecurityStatus",
      "msgtype": "f",
      "msgcat": "app"
    },
    "g": {
      "name": "TradingSessionStatusRequest",
      "msgtype": "g",
      "msgcat": "app"
    },
    "h": {
      "name": "TradingSessionStatus",
      "msgtype": "h",
      "msgcat": "app"
    },
    "i": {
      "name": "MassQuote",
      "msgtype": "i",
      "msgcat": "app"
    },
    "j": {
      "name": "BusinessMessageReject",
      "msgtype": "j",
      "msgcat": "app"
    },
    "k": {
      "name": "BidRequest",
      "msgtype": "k",
      "msgcat": "app"
    },
    "l": {
      "name": "BidResponse",
      "msgtype": "l",
      "msgcat": "app"
    },
    "m": {
      "name": "ListStrikePrice",
      "msgtype": "m",
      "msgcat": "app"
    },
    "o": {
      "name": "RegistrationInstructions",
      "msgtype": "o",
      "msgcat": "app"
    },
    "p": {
      "name": "RegistrationInstructionsResponse",
      "msgtype": "p",
      "msgcat": "app"
    },
    "q": {
      "name": "OrderMassCancelRequest",
      "msgtype": "q",
      "msgcat": "app"
    },
    "r": {
      "name": "OrderMassCancelReport",
      "msgtype": "r",
      "msgcat": "app"
    },
    "s": {
      "name": "NewOrderCross",
      "msgtype": "s",
      "msgcat": "app"
    },
    "t": {
      "name": "CrossOrderCancelReplaceRequest",
      "msgtype": "t",
      "msgcat": "app"
    },
    "u": {
      "name": "CrossOrderCancelRequest",
      "msgtype": "u",
      "msgcat": "app"
    },
    "v": {
      "name": "SecurityTypeRequest",
      "msgtype": "v",
      "msgcat": "app"
    },
    "w": {
      "name": "SecurityTypes",
      "msgtype": "w",
      "msgcat": "app"
    },
    "x": {
      "name": "SecurityListRequest",
      "msgtype": "x",
      "msgcat": "app"
    },
    "y": {
      "name": "SecurityList",
      "msgtype": "y",
      "msgcat": "app"
    },
    "z": {
      "name": "DerivativeSecurityListRequest",
      "msgtype": "z",
      "msgcat": "app"
    }
  },
  "fields": {
    "1": {
      "name": "Account",
      "number": 1,
      "tags": "",
      "enum": {}
    },
    "2": {
      "name": "AdvId",
      "number": 2,
      "tags": "",
      "enum": {}
    },
    "3": {
      "name": "AdvRefID",
      "number": 3,
      "tags": "",
      "enum": {}
    },
    "4": {
      "name": "AdvSide",
      "number": 4,
      "tags": "",
      "enum": {
        "B": "BUY",
        "S": "SELL",
        "T": "TRADE",
        "X": "CROSS"
      }
    },
    "5": {
      "name": "AdvTransType",
      "number": 5,
      "tags": "",
      "enum": {
        "N": "NEW",
        "C": "CANCEL",
        "R": "REPLACE"
      }
    },
    "6": {
      "name": "AvgPx",
      "number": 6,
      "tags": "",
      "enum": {}
    },
    "7": {
      "name": "BeginSeqNo",
      "number": 7,
      "tags": "",
      "enum": {}
    },
    "8": {
      "name": "BeginString",
      "number": 8,
      "tags": "header",
      "enum": {}
    },
    "9": {
      "name": "BodyLength",
      "number": 9,
      "tags": "header",
      "enum": {}
    },
    "10": {
      "name": "CheckSum",
      "number": 10,
      "tags": "header",
      "enum": {}
    },
    "11": {
      "name": "ClOrdID",
      "number": 11,
      "tags": "",
      "enum": {}
    },
    "12": {
      "name": "Commission",
      "number": 12,
      "tags": "",
      "enum": {}
    },
    "13": {
      "name": "CommType",
      "number": 13,
      "tags": "",
      "enum": {
        "1": "PER_UNIT",
        "2": "PERCENT",
        "3": "ABSOLUTE",
        "4": "PERCENTAGE_WAIVED_CASH_DISCOUNT",
        "5": "PERCENTAGE_WAIVED_ENHANCED_UNITS",
        "6": "POINTS_PER_BOND_OR_CONTRACT"
      }
    },
    "14": {
      "name": "CumQty",
      "number": 14,
      "tags": "",
      "enum": {}
    },
    "15": {
      "name": "Currency",
      "number": 15,
      "tags": "",
      "enum": {}
    },
    "16": {
      "name": "EndSeqNo",
      "number": 16,
      "tags": "",
      "enum": {}
    },
    "17": {
      "name": "ExecID",
      "number": 17,
      "tags": "",
      "enum": {}
    },
    "18": {
      "name": "ExecInst",
      "number": 18,
      "tags": "",
      "enum": {
        "0": "STAY_ON_OFFER_SIDE",
        "1": "NOT_HELD",
        "2": "WORK",
        "3": "GO_ALONG",
        "4": "OVER_THE_DAY",
        "5": "HELD",
        "6": "PARTICIPATE_DONT_INITIATE",
        "7": "STRICT_SCALE",
        "8": "TRY_TO_SCALE",
        "9": "STAY_ON_BID_SIDE",
        "A": "NO_CROSS",
        "B": "OK_TO_CROSS",
        "C": "CALL_FIRST",
        "D": "PERCENT_OF_VOLUME",
        "E": "DO_NOT_INCREASE_DNI",
        "F": "DO_NOT_REDUCE_DNR",
        "G": "ALL_OR_NONE_AON",
        "H": "REINSTATE_ON_SYSTEM_FAILURE",
        "I": "INSTITUTIONS_ONLY",
        "J": "REINSTATE_ON_TRADING_HALT",
        "K": "CANCEL_ON_TRADING_HALT",
        "L": "LAST_PEG",
        "M": "MID_PRICE_PEG",
        "N": "NON_NEGOTIABLE",
        "O": "OPENING_PEG",
        "P": "MARKET_PEG",
        "Q": "CANCEL_ON_SYSTEM_FAILURE",
        "R": "PRIMARY_PEG",
        "S": "SUSPEND",
        "T": "FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER",
        "U": "CUSTOMER_DISPLAY_INSTRUCTION",
        "V": "NETTING",
        "W": "PEG_TO_VWAP",
        "X": "TRADE_ALONG",
        "Y": "TRY_TO_STOP",
        "Z": "CANCEL_IF_NOT_BEST",
        "a": "TRAILING_STOP_PEG",
        "b": "STRICT_LIMIT",
        "c": "IGNORE_PRICE_VALIDITY_CHECKS",
        "d": "PEG_TO_LIMIT_PRICE",
        "e": "WORK_TO_TARGET_STRATEGY",
        "f": "INTERMARKET_SWEEP",
        "g": "EXTERNAL_ROUTING_ALLOWED",
        "h": "EXTERNAL_ROUTING_NOT_ALLOWED",
        "i": "IMBALANCE_ONLY",
        "j": "SINGLE_EXECUTION_REQUESTED_FOR_BLOCK_TRADE",
        "k": "BEST_EXECUTION",
        "l": "SUSPEND_ON_SYSTEM_FAILURE",
        "m": "SUSPEND_ON_TRADING_HALT",
        "n": "REINSTATE_ON_CONNECTION_LOSS",
        "o": "CANCEL_ON_CONNECTION_LOSS",
        "p": "SUSPEND_ON_CONNECTION_LOSS",
        "q": "RELEASE_FROM_SUSPENSION",
        "r": "EXECUTE_AS_DELTA_NEUTRAL_USING_VOLATILITY_PROVIDED",
        "s": "EXECUTE_AS_DURATION_NEUTRAL",
        "t": "EXECUTE_AS_FX_NEUTRAL"
      }
    },
    "19": {
      "name": "ExecRefID",
      "number": 19,
      "tags": "",
      "enum": {}
    },
    "20": {
      "name": "ExecTransType",
      "number": 20,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "CANCEL",
        "2": "CORRECT",
        "3": "STATUS"
      }
    },
    "21": {
      "name": "HandlInst",
      "number": 21,
      "tags": "",
      "enum": {
        "1": "AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION",
        "2": "AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK",
        "3": "MANUAL_ORDER_BEST_EXECUTION"
      }
    },
    "22": {
      "name": "SecurityIDSource",
      "number": 22,
      "tags": "",
      "enum": {
        "1": "CUSIP",
        "2": "SEDOL",
        "3": "QUIK",
        "4": "ISIN_NUMBER",
        "5": "RIC_CODE",
        "6": "ISO_CURRENCY_CODE",
        "7": "ISO_COUNTRY_CODE",
        "8": "EXCHANGE_SYMBOL",
        "9": "CONSOLIDATED_TAPE_ASSOCIATION",
        "A": "BLOOMBERG_SYMBOL",
        "B": "WERTPAPIER",
        "C": "DUTCH",
        "D": "VALOREN",
        "E": "SICOVAM",
        "F": "BELGIAN",
        "G": "COMMON",
        "H": "CLEARING_HOUSE_CLEARING_ORGANIZATION",
        "I": "ISDA_FPML_PRODUCT_SPECIFICATION",
        "J": "OPTION_PRICE_REPORTING_AUTHORITY",
        "K": "ISDA_FPML_PRODUCT_URL",
        "L": "LETTER_OF_CREDIT",
        "M": "MARKETPLACE_ASSIGNED_IDENTIFIER"
      }
    },
    "23": {
      "name": "IOIID",
      "number": 23,
      "tags": "",
      "enum": {}
    },
    "24": {
      "name": "IOIOthSvc",
      "number": 24,
      "tags": "",
      "enum": {}
    },
    "25": {
      "name": "IOIQltyInd",
      "number": 25,
      "tags": "",
      "enum": {
        "H": "HIGH",
        "L": "LOW",
        "M": "MEDIUM"
      }
    },
    "26": {
      "name": "IOIRefID",
      "number": 26,
      "tags": "",
      "enum": {}
    },
    "27": {
      "name": "IOIQty",
      "number": 27,
      "tags": "",
      "enum": {
        "S": "SMALL",
        "M": "MEDIUM",
        "L": "LARGE",
        "U": "UNDISCLOSED_QUANTITY"
      }
    },
    "28": {
      "name": "IOITransType",
      "number": 28,
      "tags": "",
      "enum": {
        "N": "NEW",
        "C": "CANCEL",
        "R": "REPLACE"
      }
    },
    "29": {
      "name": "LastCapacity",
      "number": 29,
      "tags": "",
      "enum": {
        "1": "AGENT",
        "2": "CROSS_AS_AGENT",
        "3": "CROSS_AS_PRINCIPAL",
        "4": "PRINCIPAL"
      }
    },
    "30": {
      "name": "LastMkt",
      "number": 30,
      "tags": "",
      "enum": {}
    },
    "31": {
      "name": "LastPx",
      "number": 31,
      "tags": "",
      "enum": {}
    },
    "32": {
      "name": "LastQty",
      "number": 32,
      "tags": "",
      "enum": {}
    },
    "33": {
      "name": "NoLinesOfText",
      "number": 33,
      "tags": "",
      "enum": {}
    },
    "34": {
      "name": "MsgSeqNum",
      "number": 34,
      "tags": "header",
      "enum": {}
    },
    "35": {
      "name": "MsgType",
      "number": 35,
      "tags": "header",
      "enum": {
        "0": "HEARTBEAT",
        "1": "TEST_REQUEST",
        "2": "RESEND_REQUEST",
        "3": "REJECT",
        "4": "SEQUENCE_RESET",
        "5": "LOGOUT",
        "6": "INDICATION_OF_INTEREST",
        "7": "ADVERTISEMENT",
        "8": "EXECUTION_REPORT",
        "9": "ORDER_CANCEL_REJECT",
        "A": "LOGON",
        "B": "NEWS",
        "C": "EMAIL",
        "D": "ORDER_SINGLE",
        "E": "ORDER_LIST",
        "F": "ORDER_CANCEL_REQUEST",
        "G": "ORDER_CANCEL_REPLACE_REQUEST",
        "H": "ORDER_STATUS_REQUEST",
        "J": "ALLOCATION_INSTRUCTION",
        "K": "LIST_CANCEL_REQUEST",
        "L": "LIST_EXECUTE",
        "M": "LIST_STATUS_REQUEST",
        "N": "LIST_STATUS",
        "P": "ALLOCATION_INSTRUCTION_ACK",
        "Q": "DONT_KNOW_TRADE",
        "R": "QUOTE_REQUEST",
        "S": "QUOTE",
        "T": "SETTLEMENT_INSTRUCTIONS",
        "V": "MARKET_DATA_REQUEST",
        "W": "MARKET_DATA_SNAPSHOT_FULL_REFRESH",
        "X": "MARKET_DATA_INCREMENTAL_REFRESH",
        "Y": "MARKET_DATA_REQUEST_REJECT",
        "Z": "QUOTE_CANCEL",
        "a": "QUOTE_STATUS_REQUEST",
        "b": "MASS_QUOTE_ACKNOWLEDGEMENT",
        "c": "SECURITY_DEFINITION_REQUEST",
        "d": "SECURITY_DEFINITION",
        "e": "SECURITY_STATUS_REQUEST",
        "f": "SECURITY_STATUS",
        "g": "TRADING_SESSION_STATUS_REQUEST",
        "h": "TRADING_SESSION_STATUS",
        "i": "MASS_QUOTE",
        "j": "BUSINESS_MESSAGE_REJECT",
        "k": "BID_REQUEST",
        "l": "BID_RESPONSE",
        "m": "LIST_STRIKE_PRICE",
        "n": "XML_MESSAGE",
        "o": "REGISTRATION_INSTRUCTIONS",
        "p": "REGISTRATION_INSTRUCTIONS_RESPONSE",
        "q": "ORDER_MASS_CANCEL_REQUEST",
        "r": "ORDER_MASS_CANCEL_REPORT",
        "s": "NEW_ORDER_CROSS",
        "t": "CROSS_ORDER_CANCEL_REPLACE_REQUEST",
        "u": "CROSS_ORDER_CANCEL_REQUEST",
        "v": "SECURITY_TYPE_REQUEST",
        "w": "SECURITY_TYPES",
        "x": "SECURITY_LIST_REQUEST",
        "y": "SECURITY_LIST",
        "z": "DERIVATIVE_SECURITY_LIST_REQUEST",
        "AA": "DERIVATIVE_SECURITY_LIST",
        "AB": "NEW_ORDER_MULTILEG",
        "AC": "MULTILEG_ORDER_CANCEL_REPLACE",
        "AD": "TRADE_CAPTURE_REPORT_REQUEST",
        "AE": "TRADE_CAPTURE_REPORT",
        "AF": "ORDER_MASS_STATUS_REQUEST",
        "AG": "QUOTE_REQUEST_REJECT",
        "AH": "RFQ_REQUEST",
        "AI": "QUOTE_STATUS_REPORT",
        "AJ": "QUOTE_RESPONSE",
        "AK": "CONFIRMATION",
        "AL": "POSITION_MAINTENANCE_REQUEST",
        "AM": "POSITION_MAINTENANCE_REPORT",
        "AN": "REQUEST_FOR_POSITIONS",
        "AO": "REQUEST_FOR_POSITIONS_ACK",
        "AP": "POSITION_REPORT",
        "AQ": "TRADE_CAPTURE_REPORT_REQUEST_ACK",
        "AR": "TRADE_CAPTURE_REPORT_ACK",
        "AS": "ALLOCATION_REPORT",
        "AT": "ALLOCATION_REPORT_ACK",
        "AU": "CONFIRMATION_ACK",
        "AV": "SETTLEMENT_INSTRUCTION_REQUEST",
        "AW": "ASSIGNMENT_REPORT",
        "AX": "COLLATERAL_REQUEST",
        "AY": "COLLATERAL_ASSIGNMENT",
        "AZ": "COLLATERAL_RESPONSE",
        "CA": "ORDER_MASS_ACTION_REQUEST",
        "CB": "USER_NOTIFICATION",
        "CC": "STREAM_ASSIGNMENT_REQUEST",
        "CD": "STREAM_ASSIGNMENT_REPORT",
        "CE": "STREAM_ASSIGNMENT_REPORT_ACK",
        "BA": "COLLATERAL_REPORT",
        "BB": "COLLATERAL_INQUIRY",
        "BC": "NETWORK_STATUS_REQUEST",
        "BD": "NETWORK_STATUS_RESPONSE",
        "BE": "USER_REQUEST",
        "BF": "USER_RESPONSE",
        "BG": "COLLATERAL_INQUIRY_ACK",
        "BH": "CONFIRMATION_REQUEST",
        "BI": "TRADING_SESSION_LIST_REQUEST",
        "BJ": "TRADING_SESSION_LIST",
        "BK": "SECURITY_LIST_UPDATE_REPORT",
        "BL": "ADJUSTED_POSITION_REPORT",
        "BM": "ALLOCATION_INSTRUCTION_ALERT",
        "BN": "EXECUTION_ACKNOWLEDGEMENT",
        "BO": "CONTRARY_INTENTION_REPORT",
        "BP": "SECURITY_DEFINITION_UPDATE_REPORT",
        "BQ": "SETTLEMENT_OBLIGATION_REPORT",
        "BR": "DERIVATIVE_SECURITY_LIST_UPDATE_REPORT",
        "BS": "TRADING_SESSION_LIST_UPDATER_EPORT",
        "BT": "MARKET_DEFINITION_REQUEST",
        "BU": "MARKET_DEFINITION",
        "BV": "MARKET_DEFINITION_UPDATE_REPORT",
        "BW": "APPLICATION_MESSAGE_REQUEST",
        "BX": "APPLICATION_MESSAGE_REQUEST_ACK",
        "BY": "APPLICATION_MESSAGE_REPORT",
        "BZ": "ORDER_MASS_ACTION_REPORT"
      }
    },
    "36": {
      "name": "NewSeqNo",
      "number": 36,
      "tags": "",
      "enum": {}
    },
    "37": {
      "name": "OrderID",
      "number": 37,
      "tags": "",
      "enum": {}
    },
    "38": {
      "name": "OrderQty",
      "number": 38,
      "tags": "",
      "enum": {}
    },
    "39": {
      "name": "OrdStatus",
      "number": 39,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "PARTIALLY_FILLED",
        "2": "FILLED",
        "3": "DONE_FOR_DAY",
        "4": "CANCELED",
        "5": "REPLACED",
        "6": "PENDING_CANCEL",
        "7": "STOPPED",
        "8": "REJECTED",
        "9": "SUSPENDED",
        "A": "PENDING_NEW",
        "B": "CALCULATED",
        "C": "EXPIRED",
        "D": "ACCEPTED_FOR_BIDDING",
        "E": "PENDING_REPLACE"
      }
    },
    "40": {
      "name": "OrdType",
      "number": 40,
      "tags": "",
      "enum": {
        "1": "MARKET",
        "2": "LIMIT",
        "3": "STOP_STOP_LOSS",
        "4": "STOP_LIMIT",
        "5": "MARKET_ON_CLOSE",
        "6": "WITH_OR_WITHOUT",
        "7": "LIMIT_OR_BETTER",
        "8": "LIMIT_WITH_OR_WITHOUT",
        "9": "ON_BASIS",
        "A": "ON_CLOSE",
        "B": "LIMIT_ON_CLOSE",
        "C": "FOREX_MARKET",
        "D": "PREVIOUSLY_QUOTED",
        "E": "PREVIOUSLY_INDICATED",
        "F": "FOREX_LIMIT",
        "G": "FOREX_SWAP",
        "H": "FOREX_PREVIOUSLY_QUOTED",
        "I": "FUNARI",
        "J": "MARKET_IF_TOUCHED",
        "K": "MARKET_WITH_LEFT_OVER_AS_LIMIT",
        "L": "PREVIOUS_FUND_VALUATION_POINT",
        "M": "NEXT_FUND_VALUATION_POINT",
        "P": "PEGGED",
        "Q": "COUNTER_ORDER_SELECTION"
      }
    },
    "41": {
      "name": "OrigClOrdID",
      "number": 41,
      "tags": "",
      "enum": {}
    },
    "42": {
      "name": "OrigTime",
      "number": 42,
      "tags": "",
      "enum": {}
    },
    "43": {
      "name": "PossDupFlag",
      "number": 43,
      "tags": "header",
      "enum": {
        "N": "ORIGINAL_TRANSMISSION",
        "Y": "POSSIBLE_DUPLICATE"
      }
    },
    "44": {
      "name": "Price",
      "number": 44,
      "tags": "",
      "enum": {}
    },
    "45": {
      "name": "RefSeqNum",
      "number": 45,
      "tags": "",
      "enum": {}
    },
    "46": {
      "name": "RelatdSym",
      "number": 46,
      "tags": "",
      "enum": {}
    },
    "47": {
      "name": "Rule80A",
      "number": 47,
      "tags": "",
      "enum": {
        "A": "AGENCY_SINGLE_ORDER",
        "B": "SHORT_EXEMPT_TRANSACTION_REFER_TO_A_TYPE",
        "C": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM",
        "D": "PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM",
        "E": "SHORT_EXEMPT_TRANSACTION_FOR_PRINCIPAL",
        "F": "SHORT_EXEMPT_TRANSACTION_REFER_TO_W_TYPE",
        "H": "SHORT_EXEMPT_TRANSACTION_REFER_TO_I_TYPE",
        "I": "INDIVIDUAL_INVESTOR",
        "J": "PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER",
        "K": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER",
        "L": "SHORT_EXEMPT_AFFILIATED",
        "M": "PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER",
        "N": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER",
        "O": "PROPRIETARY_AFFILIATED",
        "P": "PRINCIPAL",
        "R": "TRANSACTIONS_NON_MEMBER",
        "S": "SPECIALIST_TRADES",
        "T": "TRANSACTIONS_UNAFFILIATED_MEMBER",
        "U": "PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY",
        "W": "ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER",
        "X": "SHORT_EXEMPT_NOT_AFFILIATED",
        "Y": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY",
        "Z": "SHORT_EXEMPT_NONMEMBER"
      }
    },
    "48": {
      "name": "SecurityID",
      "number": 48,
      "tags": "",
      "enum": {}
    },
    "49": {
      "name": "SenderCompID",
      "number": 49,
      "tags": "header",
      "enum": {}
    },
    "50": {
      "name": "SenderSubID",
      "number": 50,
      "tags": "header",
      "enum": {}
    },
    "51": {
      "name": "SendingDate",
      "number": 51,
      "tags": "",
      "enum": {}
    },
    "52": {
      "name": "SendingTime",
      "number": 52,
      "tags": "header",
      "enum": {}
    },
    "53": {
      "name": "Quantity",
      "number": 53,
      "tags": "",
      "enum": {}
    },
    "54": {
      "name": "Side",
      "number": 54,
      "tags": "",
      "enum": {
        "1": "BUY",
        "2": "SELL",
        "3": "BUY_MINUS",
        "4": "SELL_PLUS",
        "5": "SELL_SHORT",
        "6": "SELL_SHORT_EXEMPT",
        "7": "UNDISCLOSED",
        "8": "CROSS",
        "9": "CROSS_SHORT",
        "A": "CROSS_SHORT_EXEMPT",
        "B": "AS_DEFINED",
        "C": "OPPOSITE",
        "D": "SUBSCRIBE",
        "E": "REDEEM",
        "F": "LEND",
        "G": "BORROW"
      }
    },
    "55": {
      "name": "Symbol",
      "number": 55,
      "tags": "",
      "enum": {}
    },
    "56": {
      "name": "TargetCompID",
      "number": 56,
      "tags": "header",
      "enum": {}
    },
    "57": {
      "name": "TargetSubID",
      "number": 57,
      "tags": "header",
      "enum": {}
    },
    "58": {
      "name": "Text",
      "number": 58,
      "tags": "",
      "enum": {}
    },
    "59": {
      "name": "TimeInForce",
      "number": 59,
      "tags": "",
      "enum": {
        "0": "DAY",
        "1": "GOOD_TILL_CANCEL",
        "2": "AT_THE_OPENING",
        "3": "IMMEDIATE_OR_CANCEL",
        "4": "FILL_OR_KILL",
        "5": "GOOD_TILL_CROSSING",
        "6": "GOOD_TILL_DATE",
        "7": "AT_THE_CLOSE",
        "8": "GOOD_THROUGH_CROSSING",
        "9": "AT_CROSSING"
      }
    },
    "60": {
      "name": "TransactTime",
      "number": 60,
      "tags": "",
      "enum": {}
    },
    "61": {
      "name": "Urgency",
      "number": 61,
      "tags": "",
      "enum": {
        "0": "NORMAL",
        "1": "FLASH",
        "2": "BACKGROUND"
      }
    },
    "62": {
      "name": "ValidUntilTime",
      "number": 62,
      "tags": "",
      "enum": {}
    },
    "63": {
      "name": "SettlType",
      "number": 63,
      "tags": "",
      "enum": {
        "0": "REGULAR_FX_SPOT_SETTLEMENT",
        "1": "CASH",
        "2": "NEXT_DAY",
        "3": "T_2",
        "4": "T_3",
        "5": "T_4",
        "6": "FUTURE",
        "7": "WHEN_AND_IF_ISSUED",
        "8": "SELLERS_OPTION",
        "9": "T_5",
        "B": "BROKEN_DATE_FOR_FX_EXPRESSING_NON_STANDARD_TENOR_SETTLDATE_MUST_BE_SPECIFIED",
        "C": "FX_SPOT_NEXT_SETTLEMENT"
      }
    },
    "64": {
      "name": "SettlDate",
      "number": 64,
      "tags": "",
      "enum": {}
    },
    "65": {
      "name": "SymbolSfx",
      "number": 65,
      "tags": "",
      "enum": {
        "CD": "EUCP_WITH_LUMP_SUM_INTEREST_RATHER_THAN_DISCOUNT_PRICE",
        "WI": "WHEN_ISSUED_FOR_A_SECURITY_TO_BE_REISSUED_UNDER_AN_OLD_CUSIP_OR_ISIN"
      }
    },
    "66": {
      "name": "ListID",
      "number": 66,
      "tags": "",
      "enum": {}
    },
    "67": {
      "name": "ListSeqNo",
      "number": 67,
      "tags": "",
      "enum": {}
    },
    "68": {
      "name": "TotNoOrders",
      "number": 68,
      "tags": "",
      "enum": {}
    },
    "69": {
      "name": "ListExecInst",
      "number": 69,
      "tags": "",
      "enum": {}
    },
    "70": {
      "name": "AllocID",
      "number": 70,
      "tags": "",
      "enum": {}
    },
    "71": {
      "name": "AllocTransType",
      "number": 71,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "REPLACE",
        "2": "CANCEL",
        "3": "PRELIMINARY",
        "4": "CALCULATED",
        "5": "CALCULATED_WITHOUT_PRELIMINARY",
        "6": "REVERSAL"
      }
    },
    "72": {
      "name": "RefAllocID",
      "number": 72,
      "tags": "",
      "enum": {}
    },
    "73": {
      "name": "NoOrders",
      "number": 73,
      "tags": "",
      "enum": {}
    },
    "74": {
      "name": "AvgPxPrecision",
      "number": 74,
      "tags": "",
      "enum": {}
    },
    "75": {
      "name": "TradeDate",
      "number": 75,
      "tags": "",
      "enum": {}
    },
    "76": {
      "name": "ExecBroker",
      "number": 76,
      "tags": "",
      "enum": {}
    },
    "77": {
      "name": "PositionEffect",
      "number": 77,
      "tags": "",
      "enum": {
        "C": "CLOSE",
        "F": "FIFO",
        "O": "OPEN",
        "R": "ROLLED",
        "N": "CLOSE_BUT_NOTIFY_ON_OPEN",
        "D": "DEFAULT"
      }
    },
    "78": {
      "name": "NoAllocs",
      "number": 78,
      "tags": "",
      "enum": {}
    },
    "79": {
      "name": "AllocAccount",
      "number": 79,
      "tags": "",
      "enum": {}
    },
    "80": {
      "name": "AllocQty",
      "number": 80,
      "tags": "",
      "enum": {}
    },
    "81": {
      "name": "ProcessCode",
      "number": 81,
      "tags": "",
      "enum": {
        "0": "REGULAR",
        "1": "SOFT_DOLLAR",
        "2": "STEP_IN",
        "3": "STEP_OUT",
        "4": "SOFT_DOLLAR_STEP_IN",
        "5": "SOFT_DOLLAR_STEP_OUT",
        "6": "PLAN_SPONSOR"
      }
    },
    "82": {
      "name": "NoRpts",
      "number": 82,
      "tags": "",
      "enum": {}
    },
    "83": {
      "name": "RptSeq",
      "number": 83,
      "tags": "",
      "enum": {}
    },
    "84": {
      "name": "CxlQty",
      "number": 84,
      "tags": "",
      "enum": {}
    },
    "85": {
      "name": "NoDlvyInst",
      "number": 85,
      "tags": "",
      "enum": {}
    },
    "86": {
      "name": "DlvyInst",
      "number": 86,
      "tags": "",
      "enum": {}
    },
    "87": {
      "name": "AllocStatus",
      "number": 87,
      "tags": "",
      "enum": {
        "0": "ACCEPTED",
        "1": "BLOCK_LEVEL_REJECT",
        "2": "ACCOUNT_LEVEL_REJECT",
        "3": "RECEIVED",
        "4": "INCOMPLETE",
        "5": "REJECTED_BY_INTERMEDIARY",
        "6": "ALLOCATION_PENDING",
        "7": "REVERSED"
      }
    },
    "88": {
      "name": "AllocRejCode",
      "number": 88,
      "tags": "",
      "enum": {
        "0": "UNKNOWN_ACCOUNT",
        "1": "INCORRECT_QUANTITY",
        "2": "INCORRECT_AVERAGEG_PRICE",
        "3": "UNKNOWN_EXECUTING_BROKER_MNEMONIC",
        "4": "COMMISSION_DIFFERENCE",
        "5": "UNKNOWN_ORDERID",
        "6": "UNKNOWN_LISTID",
        "7": "OTHER",
        "8": "INCORRECT_ALLOCATED_QUANTITY",
        "9": "CALCULATION_DIFFERENCE",
        "10": "UNKNOWN_OR_STALE_EXECID",
        "11": "MISMATCHED_DATA",
        "12": "UNKNOWN_CLORDID",
        "13": "WAREHOUSE_REQUEST_REJECTED",
        "99": "OTHER_1"
      }
    },
    "89": {
      "name": "Signature",
      "number": 89,
      "tags": "header",
      "enum": {}
    },
    "90": {
      "name": "SecureDataLen",
      "number": 90,
      "tags": "header",
      "enum": {}
    },
    "91": {
      "name": "SecureData",
      "number": 91,
      "tags": "header",
      "enum": {}
    },
    "92": {
      "name": "BrokerOfCredit",
      "number": 92,
      "tags": "",
      "enum": {}
    },
    "93": {
      "name": "SignatureLength",
      "number": 93,
      "tags": "header",
      "enum": {}
    },
    "94": {
      "name": "EmailType",
      "number": 94,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "REPLY",
        "2": "ADMIN_REPLY"
      }
    },
    "95": {
      "name": "RawDataLength",
      "number": 95,
      "tags": "",
      "enum": {}
    },
    "96": {
      "name": "RawData",
      "number": 96,
      "tags": "",
      "enum": {}
    },
    "97": {
      "name": "PossResend",
      "number": 97,
      "tags": "header",
      "enum": {
        "N": "ORIGINAL_TRANSMISSION",
        "Y": "POSSIBLE_RESEND"
      }
    },
    "98": {
      "name": "EncryptMethod",
      "number": 98,
      "tags": "",
      "enum": {
        "0": "NONE_OTHER",
        "1": "PKCS",
        "2": "DES",
        "3": "PKCS_DES",
        "4": "PGP_DES",
        "5": "PGP_DES_MD5",
        "6": "PEM_DES_MD5"
      }
    },
    "99": {
      "name": "StopPx",
      "number": 99,
      "tags": "",
      "enum": {}
    },
    "100": {
      "name": "ExDestination",
      "number": 100,
      "tags": "",
      "enum": {}
    },
    "102": {
      "name": "CxlRejReason",
      "number": 102,
      "tags": "",
      "enum": {
        "0": "TOO_LATE_TO_CANCEL",
        "1": "UNKNOWN_ORDER",
        "2": "BROKER_EXCHANGE_OPTION",
        "3": "ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS",
        "4": "UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST",
        "5": "ORIGORDMODTIME_OF_ORDER",
        "6": "DUPLICATE_CLORDID_RECEIVED",
        "7": "PRICE_EXCEEDS_CURRENT_PRICE",
        "8": "PRICE_EXCEEDS_CURRENT_PRICE_BAND",
        "18": "INVALID_PRICE_INCREMENT",
        "99": "OTHER"
      }
    },
    "103": {
      "name": "OrdRejReason",
      "number": 103,
      "tags": "",
      "enum": {
        "0": "BROKER_EXCHANGE_OPTION",
        "1": "UNKNOWN_SYMBOL",
        "2": "EXCHANGE_CLOSED",
        "3": "ORDER_EXCEEDS_LIMIT",
        "4": "TOO_LATE_TO_ENTER",
        "5": "UNKNOWN_ORDER",
        "6": "DUPLICATE_ORDER",
        "7": "DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER",
        "8": "STALE_ORDER",
        "9": "TRADE_ALONG_REQUIRED",
        "10": "INVALID_INVESTOR_ID",
        "11": "UNSUPPORTED_ORDER_CHARACTERISTIC",
        "12": "SURVEILLENCE_OPTION",
        "13": "INCORRECT_QUANTITY",
        "14": "INCORRECT_ALLOCATED_QUANTITY",
        "15": "UNKNOWN_ACCOUNT",
        "16": "PRICE_EXCEEDS_CURRENT_PRICE_BAND",
        "18": "INVALID_PRICE_INCREMENT",
        "99": "OTHER"
      }
    },
    "104": {
      "name": "IOIQualifier",
      "number": 104,
      "tags": "",
      "enum": {
        "A": "ALL_OR_NONE",
        "B": "MARKET_ON_CLOSE",
        "C": "AT_THE_CLOSE",
        "D": "VWAP",
        "I": "IN_TOUCH_WITH",
        "L": "LIMIT",
        "M": "MORE_BEHIND",
        "O": "AT_THE_OPEN",
        "P": "TAKING_A_POSITION",
        "Q": "AT_THE_MARKET",
        "R": "READY_TO_TRADE",
        "S": "PORTFOLIO_SHOWN",
        "T": "THROUGH_THE_DAY",
        "V": "VERSUS",
        "W": "INDICATION_WORKING_AWAY",
        "X": "CROSSING_OPPORTUNITY",
        "Y": "AT_THE_MIDPOINT",
        "Z": "PRE_OPEN"
      }
    },
    "105": {
      "name": "WaveNo",
      "number": 105,
      "tags": "",
      "enum": {}
    },
    "106": {
      "name": "Issuer",
      "number": 106,
      "tags": "",
      "enum": {}
    },
    "107": {
      "name": "SecurityDesc",
      "number": 107,
      "tags": "",
      "enum": {}
    },
    "108": {
      "name": "HeartBtInt",
      "number": 108,
      "tags": "",
      "enum": {}
    },
    "109": {
      "name": "ClientID",
      "number": 109,
      "tags": "",
      "enum": {}
    },
    "110": {
      "name": "MinQty",
      "number": 110,
      "tags": "",
      "enum": {}
    },
    "111": {
      "name": "MaxFloor",
      "number": 111,
      "tags": "",
      "enum": {}
    },
    "112": {
      "name": "TestReqID",
      "number": 112,
      "tags": "",
      "enum": {}
    },
    "113": {
      "name": "ReportToExch",
      "number": 113,
      "tags": "",
      "enum": {
        "N": "INDICATES_THE_PARTY_SENDING_MESSAGE_WILL_REPORT_TRADE",
        "Y": "INDICATES_THE_PARTY_RECEIVING_MESSAGE_MUST_REPORT_TRADE"
      }
    },
    "114": {
      "name": "LocateReqd",
      "number": 114,
      "tags": "",
      "enum": {
        "N": "INDICATES_THE_BROKER_IS_NOT_REQUIRED_TO_LOCATE",
        "Y": "INDICATES_THE_BROKER_IS_RESPONSIBLE_FOR_LOCATING_THE_STOCK"
      }
    },
    "115": {
      "name": "OnBehalfOfCompID",
      "number": 115,
      "tags": "header",
      "enum": {}
    },
    "116": {
      "name": "OnBehalfOfSubID",
      "number": 116,
      "tags": "header",
      "enum": {}
    },
    "117": {
      "name": "QuoteID",
      "number": 117,
      "tags": "",
      "enum": {}
    },
    "118": {
      "name": "NetMoney",
      "number": 118,
      "tags": "",
      "enum": {}
    },
    "119": {
      "name": "SettlCurrAmt",
      "number": 119,
      "tags": "",
      "enum": {}
    },
    "120": {
      "name": "SettlCurrency",
      "number": 120,
      "tags": "",
      "enum": {}
    },
    "121": {
      "name": "ForexReq",
      "number": 121,
      "tags": "",
      "enum": {
        "N": "DO_NOT_EXECUTE_FOREX_AFTER_SECURITY_TRADE",
        "Y": "EXECUTE_FOREX_AFTER_SECURITY_TRADE"
      }
    },
    "122": {
      "name": "OrigSendingTime",
      "number": 122,
      "tags": "header",
      "enum": {}
    },
    "123": {
      "name": "GapFillFlag",
      "number": 123,
      "tags": "",
      "enum": {
        "N": "SEQUENCE_RESET_IGNORE_MSG_SEQ_NUM",
        "Y": "GAP_FILL_MESSAGE_MSG_SEQ_NUM_FIELD_VALID"
      }
    },
    "124": {
      "name": "NoExecs",
      "number": 124,
      "tags": "",
      "enum": {}
    },
    "125": {
      "name": "CxlType",
      "number": 125,
      "tags": "",
      "enum": {
        "P": "PARTIAL_CANCEL",
        "F": "FULL_REMAINING_QUANTITY"
      }
    },
    "126": {
      "name": "ExpireTime",
      "number": 126,
      "tags": "",
      "enum": {}
    },
    "127": {
      "name": "DKReason",
      "number": 127,
      "tags": "",
      "enum": {
        "A": "UNKNOWN_SYMBOL",
        "B": "WRONG_SIDE",
        "C": "QUANTITY_EXCEEDS_ORDER",
        "D": "NO_MATCHING_ORDER",
        "E": "PRICE_EXCEEDS_LIMIT",
        "F": "CALCULATION_DIFFERENCE",
        "Z": "OTHER"
      }
    },
    "128": {
      "name": "DeliverToCompID",
      "number": 128,
      "tags": "header",
      "enum": {}
    },
    "129": {
      "name": "DeliverToSubID",
      "number": 129,
      "tags": "header",
      "enum": {}
    },
    "130": {
      "name": "IOINaturalFlag",
      "number": 130,
      "tags": "",
      "enum": {
        "N": "NOT_NATURAL",
        "Y": "NATURAL"
      }
    },
    "131": {
      "name": "QuoteReqID",
      "number": 131,
      "tags": "",
      "enum": {}
    },
    "132": {
      "name": "BidPx",
      "number": 132,
      "tags": "",
      "enum": {}
    },
    "133": {
      "name": "OfferPx",
      "number": 133,
      "tags": "",
      "enum": {}
    },
    "134": {
      "name": "BidSize",
      "number": 134,
      "tags": "",
      "enum": {}
    },
    "135": {
      "name": "OfferSize",
      "number": 135,
      "tags": "",
      "enum": {}
    },
    "136": {
      "name": "NoMiscFees",
      "number": 136,
      "tags": "",
      "enum": {}
    },
    "137": {
      "name": "MiscFeeAmt",
      "number": 137,
      "tags": "",
      "enum": {}
    },
    "138": {
      "name": "MiscFeeCurr",
      "number": 138,
      "tags": "",
      "enum": {}
    },
    "139": {
      "name": "MiscFeeType",
      "number": 139,
      "tags": "",
      "enum": {
        "1": "REGULATORY",
        "2": "TAX",
        "3": "LOCAL_COMMISSION",
        "4": "EXCHANGE_FEES",
        "5": "STAMP",
        "6": "LEVY",
        "7": "OTHER",
        "8": "MARKUP",
        "9": "CONSUMPTION_TAX",
        "10": "PER_TRANSACTION",
        "11": "CONVERSION",
        "12": "AGENT",
        "13": "TRANSFER_FEE",
        "14": "SECURITY_LENDING"
      }
    },
    "140": {
      "name": "PrevClosePx",
      "number": 140,
      "tags": "",
      "enum": {}
    },
    "141": {
      "name": "ResetSeqNumFlag",
      "number": 141,
      "tags": "",
      "enum": {
        "N": "NO",
        "Y": "YES_RESET_SEQUENCE_NUMBERS"
      }
    },
    "142": {
      "name": "SenderLocationID",
      "number": 142,
      "tags": "header",
      "enum": {}
    },
    "143": {
      "name": "TargetLocationID",
      "number": 143,
      "tags": "header",
      "enum": {}
    },
    "144": {
      "name": "OnBehalfOfLocationID",
      "number": 144,
      "tags": "header",
      "enum": {}
    },
    "145": {
      "name": "DeliverToLocationID",
      "number": 145,
      "tags": "header",
      "enum": {}
    },
    "146": {
      "name": "NoRelatedSym",
      "number": 146,
      "tags": "",
      "enum": {}
    },
    "147": {
      "name": "Subject",
      "number": 147,
      "tags": "",
      "enum": {}
    },
    "148": {
      "name": "Headline",
      "number": 148,
      "tags": "",
      "enum": {}
    },
    "149": {
      "name": "URLLink",
      "number": 149,
      "tags": "",
      "enum": {}
    },
    "150": {
      "name": "ExecType",
      "number": 150,
      "tags": "",
      "enum": {
        "0": "NEW",
        "3": "DONE_FOR_DAY",
        "4": "CANCELED",
        "5": "REPLACED",
        "6": "PENDING_CANCEL",
        "7": "STOPPED",
        "8": "REJECTED",
        "9": "SUSPENDED",
        "A": "PENDING_NEW",
        "B": "CALCULATED",
        "C": "EXPIRED",
        "D": "RESTATED",
        "E": "PENDING_REPLACE",
        "F": "TRADE",
        "G": "TRADE_CORRECT",
        "H": "TRADE_CANCEL",
        "I": "ORDER_STATUS",
        "J": "TRADE_IN_A_CLEARING_HOLD",
        "K": "TRADE_HAS_BEEN_RELEASED_TO_CLEARING",
        "L": "TRIGGERED_OR_ACTIVATED_BY_SYSTEM"
      }
    },
    "151": {
      "name": "LeavesQty",
      "number": 151,
      "tags": "",
      "enum": {}
    },
    "152": {
      "name": "CashOrderQty",
      "number": 152,
      "tags": "",
      "enum": {}
    },
    "153": {
      "name": "AllocAvgPx",
      "number": 153,
      "tags": "",
      "enum": {}
    },
    "154": {
      "name": "AllocNetMoney",
      "number": 154,
      "tags": "",
      "enum": {}
    },
    "155": {
      "name": "SettlCurrFxRate",
      "number": 155,
      "tags": "",
      "enum": {}
    },
    "156": {
      "name": "SettlCurrFxRateCalc",
      "number": 156,
      "tags": "",
      "enum": {
        "M": "MULTIPLY",
        "D": "DIVIDE"
      }
    },
    "157": {
      "name": "NumDaysInterest",
      "number": 157,
      "tags": "",
      "enum": {}
    },
    "158": {
      "name": "AccruedInterestRate",
      "number": 158,
      "tags": "",
      "enum": {}
    },
    "159": {
      "name": "AccruedInterestAmt",
      "number": 159,
      "tags": "",
      "enum": {}
    },
    "160": {
      "name": "SettlInstMode",
      "number": 160,
      "tags": "",
      "enum": {
        "0": "DEFAULT",
        "1": "STANDING_INSTRUCTIONS_PROVIDED",
        "2": "SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING",
        "3": "SPECIFIC_ALLOCATION_ACCOUNT_STANDING",
        "4": "SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT",
        "5": "REQUEST_REJECT"
      }
    },
    "161": {
      "name": "AllocText",
      "number": 161,
      "tags": "",
      "enum": {}
    },
    "162": {
      "name": "SettlInstID",
      "number": 162,
      "tags": "",
      "enum": {}
    },
    "163": {
      "name": "SettlInstTransType",
      "number": 163,
      "tags": "",
      "enum": {
        "N": "NEW",
        "C": "CANCEL",
        "R": "REPLACE",
        "T": "RESTATE"
      }
    },
    "164": {
      "name": "EmailThreadID",
      "number": 164,
      "tags": "",
      "enum": {}
    },
    "165": {
      "name": "SettlInstSource",
      "number": 165,
      "tags": "",
      "enum": {
        "1": "BROKERS_INSTRUCTIONS",
        "2": "INSTITUTIONS_INSTRUCTIONS",
        "3": "INVESTOR"
      }
    },
    "166": {
      "name": "SettlLocation",
      "number": 166,
      "tags": "",
      "enum": {
        "CED": "CEDEL",
        "DTC": "DEPOSITORY_TRUST_COMPANY",
        "EUR": "EUROCLEAR",
        "FED": "FEDERAL_BOOK_ENTRY",
        "ISO": "LOCAL_MARKET_SETTLE_LOCATION",
        "PNY": "PHYSICAL",
        "PTC": "PARTICIPANT_TRUST_COMPANY"
      }
    },
    "167": {
      "name": "SecurityType",
      "number": 167,
      "tags": "",
      "enum": {
        "EUSUPRA": "EURO_SUPRANATIONAL_COUPONS_",
        "CORP": "CORPORATE_BOND",
        "FOR": "FOREIGN_EXCHANGE_CONTRACT",
        "CDS": "CREDIT_DEFAULT_SWAP",
        "CS": "COMMON_STOCK",
        "REPO": "REPURCHASE",
        "BRADY": "BRADY_BOND",
        "TERM": "TERM_LOAN",
        "BA": "BANKERS_ACCEPTANCE",
        "ABS": "ASSET_BACKED_SECURITIES",
        "AN": "OTHER_ANTICIPATION_NOTES",
        "MF": "MUTUAL_FUND",
        "FAC": "FEDERAL_AGENCY_COUPON",
        "CPP": "CORPORATE_PRIVATE_PLACEMENT",
        "FUT": "FUTURE",
        "PS": "PREFERRED_STOCK",
        "FORWARD": "FORWARD",
        "CAN": "CANADIAN_TREASURY_NOTES",
        "RVLV": "REVOLVER_LOAN",
        "BDN": "BANK_DEPOSITORY_NOTE",
        "CMB": "CANADIAN_MORTGAGE_BONDS",
        "COFO": "CERTIFICATE_OF_OBLIGATION",
        "MLEG": "MULTI_LEG_INSTRUMENT",
        "FXNDF": "NON_DELIVERABLE_FORWARD",
        "FADN": "FEDERAL_AGENCY_DISCOUNT_NOTE",
        "CB": "CONVERTIBLE_BOND",
        "OPT": "OPTION",
        "BUYSELL": "BUY_SELLBACK",
        "CTB": "CANADIAN_TREASURY_BILLS",
        "RVLVTRM": "REVOLVER_TERM_LOAN",
        "BN": "BANK_NOTES",
        "CMBS": "CORP_MORTGAGE_BACKED_SECURITIES",
        "COFP": "CERTIFICATE_OF_PARTICIPATION",
        "NONE": "NO_SECURITY_TYPE",
        "FXSPOT": "FX_SPOT",
        "UST": "US_TREASURY_NOTE",
        "PEF": "PRIVATE_EXPORT_FUNDING_",
        "DUAL": "DUAL_CURRENCY",
        "OOF": "OPTIONS_ON_FUTURES",
        "SECLOAN": "SECURITIES_LOAN",
        "EUSOV": "EURO_SOVEREIGNS_",
        "BRIDGE": "BRIDGE_LOAN",
        "BOX": "BILL_OF_EXCHANGES",
        "CMO": "COLLATERALIZED_MORTGAGE_OBLIGATION",
        "GO": "GENERAL_OBLIGATION_BONDS",
        "FXFWD": "FX_FORWARD",
        "USTB": "US_TREASURY_BILL",
        "SUPRA": "USD_SUPRANATIONAL_COUPONS_",
        "EUCORP": "EURO_CORPORATE_BOND",
        "OOP": "OPTIONS_ON_PHYSICAL_USE_NOT_RECOMMENDED",
        "SECPLEDGE": "SECURITIES_PLEDGE",
        "PROV": "CANADIAN_PROVINCIAL_BONDS",
        "LOFC": "LETTER_OF_CREDIT",
        "CAMM": "CANADIAN_MONEY_MARKETS",
        "IET": "IOETTE_MORTGAGE",
        "MT": "MANDATORY_TENDER",
        "FXSWAP": "FX_SWAP",
        "EUFRN": "EURO_CORPORATE_FLOATING_RATE_NOTES",
        "IRS": "INTEREST_RATE_SWAP",
        "TB": "TREASURY_BILL_NON_US",
        "SWING": "SWING_LINE_FACILITY",
        "CD": "CERTIFICATE_OF_DEPOSIT",
        "MBS": "MORTGAGE_BACKED_SECURITIES",
        "RAN": "REVENUE_ANTICIPATION_NOTE",
        "?": "WILDCARD_ENTRY_FOR_USE_ON_SECURITY_DEFINITION_REQUEST",
        "FRN": "US_CORPORATE_FLOATING_RATE_NOTES",
        "OOC": "OPTIONS_ON_COMBO",
        "TBOND": "US_TREASURY_BOND",
        "DINP": "DEBTOR_IN_POSSESSION",
        "CL": "CALL_LOANS",
        "MIO": "MORTGAGE_INTEREST_ONLY",
        "REV": "REVENUE_BONDS",
        "CASH": "CASH",
        "XLINKD": "INDEXED_LINKED",
        "TINT": "INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE",
        "DEFLTED": "DEFAULTED",
        "CP": "COMMERCIAL_PAPER",
        "MPO": "MORTGAGE_PRINCIPAL_ONLY",
        "SPCLA": "SPECIAL_ASSESSMENT",
        "STRUCT": "STRUCTURED_NOTES",
        "TBILL": "US_TREASURY_BILL_1",
        "TIPS": "TREASURY_INFLATION_PROTECTED_SECURITIES",
        "WITHDRN": "WITHDRAWN",
        "DN": "DEPOSIT_NOTES",
        "MPP": "MORTGAGE_PRIVATE_PLACEMENT",
        "SPCLO": "SPECIAL_OBLIGATION",
        "YANK": "YANKEE_CORPORATE_BOND",
        "TCAL": "PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE",
        "REPLACD": "REPLACED",
        "EUCD": "EURO_CERTIFICATE_OF_DEPOSIT",
        "MPT": "MISCELLANEOUS_PASS_THROUGH",
        "SPCLT": "SPECIAL_TAX",
        "TPRN": "PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE",
        "MATURED": "MATURED",
        "EUCP": "EURO_COMMERCIAL_PAPER",
        "PFAND": "PFANDBRIEFE_",
        "TAN": "TAX_ANTICIPATION_NOTE",
        "TNOTE": "US_TREASURY_NOTE_1",
        "AMENDED": "AMENDED_RESTATED",
        "LQN": "LIQUIDITY_NOTE",
        "TBA": "TO_BE_ANNOUNCED",
        "TAXA": "TAX_ALLOCATION",
        "RETIRED": "RETIRED",
        "MTN": "MEDIUM_TERM_NOTES",
        "TECP": "TAX_EXEMPT_COMMERCIAL_PAPER",
        "ONITE": "OVERNIGHT",
        "TMCP": "TAXABLE_MUNICIPAL_CP",
        "PN": "PROMISSORY_NOTE",
        "STN": "SHORT_TERM_LOAN_NOTE",
        "TRAN": "TAX_REVENUE_ANTICIPATION_NOTE",
        "PZFJ": "PLAZOS_FIJOS",
        "VRDN": "VARIABLE_RATE_DEMAND_NOTE",
        "SLQN": "SECURED_LIQUIDITY_NOTE",
        "WAR": "WARRANT",
        "TD": "TIME_DEPOSIT",
        "TLQN": "TERM_LIQUIDITY_NOTE",
        "XCN": "EXTENDED_COMM_NOTE",
        "YCD": "YANKEE_CERTIFICATE_OF_DEPOSIT"
      }
    },
    "168": {
      "name": "EffectiveTime",
      "number": 168,
      "tags": "",
      "enum": {}
    },
    "169": {
      "name": "StandInstDbType",
      "number": 169,
      "tags": "",
      "enum": {
        "0": "OTHER",
        "1": "DTC_SID",
        "2": "THOMSON_ALERT",
        "3": "A_GLOBAL_CUSTODIAN",
        "4": "ACCOUNTNET"
      }
    },
    "170": {
      "name": "StandInstDbName",
      "number": 170,
      "tags": "",
      "enum": {}
    },
    "171": {
      "name": "StandInstDbID",
      "number": 171,
      "tags": "",
      "enum": {}
    },
    "172": {
      "name": "SettlDeliveryType",
      "number": 172,
      "tags": "",
      "enum": {
        "0": "VERSUS_PAYMENT_DELIVER_PAYMENT",
        "1": "FREE_DELIVER_FREE",
        "2": "TRI_PARTY",
        "3": "HOLD_IN_CUSTODY"
      }
    },
    "173": {
      "name": "SettlDepositoryCode",
      "number": 173,
      "tags": "",
      "enum": {}
    },
    "174": {
      "name": "SettlBrkrCode",
      "number": 174,
      "tags": "",
      "enum": {}
    },
    "175": {
      "name": "SettlInstCode",
      "number": 175,
      "tags": "",
      "enum": {}
    },
    "176": {
      "name": "SecuritySettlAgentName",
      "number": 176,
      "tags": "",
      "enum": {}
    },
    "177": {
      "name": "SecuritySettlAgentCode",
      "number": 177,
      "tags": "",
      "enum": {}
    },
    "178": {
      "name": "SecuritySettlAgentAcctNum",
      "number": 178,
      "tags": "",
      "enum": {}
    },
    "179": {
      "name": "SecuritySettlAgentAcctName",
      "number": 179,
      "tags": "",
      "enum": {}
    },
    "180": {
      "name": "SecuritySettlAgentContactName",
      "number": 180,
      "tags": "",
      "enum": {}
    },
    "181": {
      "name": "SecuritySettlAgentContactPhone",
      "number": 181,
      "tags": "",
      "enum": {}
    },
    "182": {
      "name": "CashSettlAgentName",
      "number": 182,
      "tags": "",
      "enum": {}
    },
    "183": {
      "name": "CashSettlAgentCode",
      "number": 183,
      "tags": "",
      "enum": {}
    },
    "184": {
      "name": "CashSettlAgentAcctNum",
      "number": 184,
      "tags": "",
      "enum": {}
    },
    "185": {
      "name": "CashSettlAgentAcctName",
      "number": 185,
      "tags": "",
      "enum": {}
    },
    "186": {
      "name": "CashSettlAgentContactName",
      "number": 186,
      "tags": "",
      "enum": {}
    },
    "187": {
      "name": "CashSettlAgentContactPhone",
      "number": 187,
      "tags": "",
      "enum": {}
    },
    "188": {
      "name": "BidSpotRate",
      "number": 188,
      "tags": "",
      "enum": {}
    },
    "189": {
      "name": "BidForwardPoints",
      "number": 189,
      "tags": "",
      "enum": {}
    },
    "190": {
      "name": "OfferSpotRate",
      "number": 190,
      "tags": "",
      "enum": {}
    },
    "191": {
      "name": "OfferForwardPoints",
      "number": 191,
      "tags": "",
      "enum": {}
    },
    "192": {
      "name": "OrderQty2",
      "number": 192,
      "tags": "",
      "enum": {}
    },
    "193": {
      "name": "SettlDate2",
      "number": 193,
      "tags": "",
      "enum": {}
    },
    "194": {
      "name": "LastSpotRate",
      "number": 194,
      "tags": "",
      "enum": {}
    },
    "195": {
      "name": "LastForwardPoints",
      "number": 195,
      "tags": "",
      "enum": {}
    },
    "196": {
      "name": "AllocLinkID",
      "number": 196,
      "tags": "",
      "enum": {}
    },
    "197": {
      "name": "AllocLinkType",
      "number": 197,
      "tags": "",
      "enum": {
        "0": "FX_NETTING",
        "1": "FX_SWAP"
      }
    },
    "198": {
      "name": "SecondaryOrderID",
      "number": 198,
      "tags": "",
      "enum": {}
    },
    "199": {
      "name": "NoIOIQualifiers",
      "number": 199,
      "tags": "",
      "enum": {}
    },
    "200": {
      "name": "MaturityMonthYear",
      "number": 200,
      "tags": "",
      "enum": {}
    },
    "201": {
      "name": "PutOrCall",
      "number": 201,
      "tags": "",
      "enum": {
        "0": "PUT",
        "1": "CALL"
      }
    },
    "202": {
      "name": "StrikePrice",
      "number": 202,
      "tags": "",
      "enum": {}
    },
    "203": {
      "name": "CoveredOrUncovered",
      "number": 203,
      "tags": "",
      "enum": {
        "0": "COVERED",
        "1": "UNCOVERED"
      }
    },
    "204": {
      "name": "CustomerOrFirm",
      "number": 204,
      "tags": "",
      "enum": {
        "0": "CUSTOMER",
        "1": "FIRM"
      }
    },
    "205": {
      "name": "MaturityDay",
      "number": 205,
      "tags": "",
      "enum": {}
    },
    "206": {
      "name": "OptAttribute",
      "number": 206,
      "tags": "",
      "enum": {}
    },
    "207": {
      "name": "SecurityExchange",
      "number": 207,
      "tags": "",
      "enum": {}
    },
    "208": {
      "name": "NotifyBrokerOfCredit",
      "number": 208,
      "tags": "",
      "enum": {
        "N": "DETAILS_SHOULD_NOT_BE_COMMUNICATED",
        "Y": "DETAILS_SHOULD_BE_COMMUNICATED"
      }
    },
    "209": {
      "name": "AllocHandlInst",
      "number": 209,
      "tags": "",
      "enum": {
        "1": "MATCH",
        "2": "FORWARD",
        "3": "FORWARD_AND_MATCH"
      }
    },
    "210": {
      "name": "MaxShow",
      "number": 210,
      "tags": "",
      "enum": {}
    },
    "211": {
      "name": "PegOffsetValue",
      "number": 211,
      "tags": "",
      "enum": {}
    },
    "212": {
      "name": "XmlDataLen",
      "number": 212,
      "tags": "header",
      "enum": {}
    },
    "213": {
      "name": "XmlData",
      "number": 213,
      "tags": "header",
      "enum": {}
    },
    "214": {
      "name": "SettlInstRefID",
      "number": 214,
      "tags": "",
      "enum": {}
    },
    "215": {
      "name": "NoRoutingIDs",
      "number": 215,
      "tags": "",
      "enum": {}
    },
    "216": {
      "name": "RoutingType",
      "number": 216,
      "tags": "",
      "enum": {
        "1": "TARGET_FIRM",
        "2": "TARGET_LIST",
        "3": "BLOCK_FIRM",
        "4": "BLOCK_LIST"
      }
    },
    "217": {
      "name": "RoutingID",
      "number": 217,
      "tags": "",
      "enum": {}
    },
    "218": {
      "name": "Spread",
      "number": 218,
      "tags": "",
      "enum": {}
    },
    "219": {
      "name": "Benchmark",
      "number": 219,
      "tags": "",
      "enum": {
        "1": "CURVE",
        "2": "FIVEYR",
        "3": "OLD5",
        "4": "TENYR",
        "5": "OLD10",
        "6": "THIRTYYR",
        "7": "OLD30",
        "8": "THREEMOLIBOR",
        "9": "SIXMOLIBOR"
      }
    },
    "220": {
      "name": "BenchmarkCurveCurrency",
      "number": 220,
      "tags": "",
      "enum": {}
    },
    "221": {
      "name": "BenchmarkCurveName",
      "number": 221,
      "tags": "",
      "enum": {
        "EONIA": "EONIA",
        "EUREPO": "EUREPO",
        "Euribor": "EURIBOR",
        "FutureSWAP": "FUTURESWAP",
        "LIBID": "LIBID",
        "LIBOR": "LIBOR",
        "MuniAAA": "MUNIAAA",
        "OTHER": "OTHER",
        "Pfandbriefe": "PFANDBRIEFE",
        "SONIA": "SONIA",
        "SWAP": "SWAP",
        "Treasury": "TREASURY"
      }
    },
    "222": {
      "name": "BenchmarkCurvePoint",
      "number": 222,
      "tags": "",
      "enum": {}
    },
    "223": {
      "name": "CouponRate",
      "number": 223,
      "tags": "",
      "enum": {}
    },
    "224": {
      "name": "CouponPaymentDate",
      "number": 224,
      "tags": "",
      "enum": {}
    },
    "225": {
      "name": "IssueDate",
      "number": 225,
      "tags": "",
      "enum": {}
    },
    "226": {
      "name": "RepurchaseTerm",
      "number": 226,
      "tags": "",
      "enum": {}
    },
    "227": {
      "name": "RepurchaseRate",
      "number": 227,
      "tags": "",
      "enum": {}
    },
    "228": {
      "name": "Factor",
      "number": 228,
      "tags": "",
      "enum": {}
    },
    "229": {
      "name": "TradeOriginationDate",
      "number": 229,
      "tags": "",
      "enum": {}
    },
    "230": {
      "name": "ExDate",
      "number": 230,
      "tags": "",
      "enum": {}
    },
    "231": {
      "name": "ContractMultiplier",
      "number": 231,
      "tags": "",
      "enum": {}
    },
    "232": {
      "name": "NoStipulations",
      "number": 232,
      "tags": "",
      "enum": {}
    },
    "233": {
      "name": "StipulationType",
      "number": 233,
      "tags": "",
      "enum": {
        "AMT": "ALTERNATIVE_MINIMUM_TAX",
        "ABS": "ABSOLUTE_PREPAYMENT_SPEED",
        "AUTOREINV": "AUTO_REINVESTMENT_AT_RATE_OR_BETTER",
        "CPP": "CONSTANT_PREPAYMENT_PENALTY",
        "BANKQUAL": "BANK_QUALIFIED",
        "CPR": "CONSTANT_PREPAYMENT_RATE",
        "BGNCON": "BARGAIN_CONDITIONS",
        "CPY": "CONSTANT_PREPAYMENT_YIELD",
        "COUPON": "COUPON_RANGE",
        "HEP": "FINAL_CPR_OF_HOME_EQUITY_PREPAYMENT_CURVE",
        "CURRENCY": "ISO_CURRENCY_CODE",
        "MHP": "PERCENT_OF_MANUFACTURED_HOUSING_PREPAYMENT_CURVE",
        "CUSTOMDATE": "CUSTOM_START_END_DATE",
        "MPR": "MONTHLY_PREPAYMENT_RATE",
        "GEOG": "GEOGRAPHICS_AND_RANGE",
        "PPC": "PERCENT_OF_PROSPECTUS_PREPAYMENT_CURVE",
        "HAIRCUT": "VALUATION_DISCOUNT",
        "PSA": "PERCENT_OF_BMA_PREPAYMENT_CURVE",
        "INSURED": "INSURED",
        "SMM": "SINGLE_MONTHLY_MORTALITY",
        "ISSUE": "YEAR_OR_YEAR_MONTH_OF_ISSUE",
        "ISSUER": "ISSUERS_TICKER",
        "ISSUESIZE": "ISSUE_SIZE_RANGE",
        "LOOKBACK": "LOOKBACK_DAYS",
        "LOT": "EXPLICIT_LOT_IDENTIFIER",
        "LOTVAR": "LOT_VARIANCE",
        "MAT": "MATURITY_YEAR_AND_MONTH",
        "MATURITY": "MATURITY_RANGE",
        "MAXSUBS": "MAXIMUM_SUBSTITUTIONS",
        "MINDNOM": "MINIMUM_DENOMINATION",
        "MININCR": "MINIMUM_INCREMENT",
        "MINQTY": "MINIMUM_QUANTITY",
        "PAYFREQ": "PAYMENT_FREQUENCY_CALENDAR",
        "PIECES": "NUMBER_OF_PIECES",
        "PMAX": "POOLS_MAXIMUM",
        "PPL": "POOLS_PER_LOT",
        "PPM": "POOLS_PER_MILLION",
        "PPT": "POOLS_PER_TRADE",
        "PRICE": "PRICE_RANGE",
        "PRICEFREQ": "PRICING_FREQUENCY",
        "PROD": "PRODUCTION_YEAR",
        "PROTECT": "CALL_PROTECTION",
        "PURPOSE": "PURPOSE",
        "PXSOURCE": "BENCHMARK_PRICE_SOURCE",
        "RATING": "RATING_SOURCE_AND_RANGE",
        "REDEMPTION": "TYPE_OF_REDEMPTION_VALUES_ARE_NONCALLABLE_PREFUNDED_ESCROWEDTOMATURITY_PUTABLE_CONVERTIBLE",
        "RESTRICTED": "RESTRICTED",
        "SECTOR": "MARKET_SECTOR",
        "SECTYPE": "SECURITY_TYPE_INCLUDED_OR_EXCLUDED",
        "STRUCT": "STRUCTURE",
        "SUBSFREQ": "SUBSTITUTIONS_FREQUENCY",
        "SUBSLEFT": "SUBSTITUTIONS_LEFT",
        "TEXT": "FREEFORM_TEXT",
        "TRDVAR": "TRADE_VARIANCE",
        "WAC": "WEIGHTED_AVERAGE_COUPON_VALUE_IN_PERCENT",
        "WAL": "WEIGHTED_AVERAGE_LIFE_COUPON_VALUE_IN_PERCENT",
        "WALA": "WEIGHTED_AVERAGE_LOAN_AGE_VALUE_IN_MONTHS",
        "WAM": "WEIGHTED_AVERAGE_MATURITY_VALUE_IN_MONTHS",
        "WHOLE": "WHOLE_POOL",
        "YIELD": "YIELD_RANGE",
        "AVFICO": "AVERAGE_FICO_SCORE",
        "AVSIZE": "AVERAGE_LOAN_SIZE",
        "MAXBAL": "MAXIMUM_LOAN_BALANCE",
        "POOL": "POOL_IDENTIFIER",
        "ROLLTYPE": "TYPE_OF_ROLL_TRADE",
        "REFTRADE": "REFERENCE_TO_ROLLING_OR_CLOSING_TRADE",
        "REFPRIN": "PRINCIPAL_OF_ROLLING_OR_CLOSING_TRADE",
        "REFINT": "INTEREST_OF_ROLLING_OR_CLOSING_TRADE",
        "AVAILQTY": "AVAILABLE_OFFER_QUANTITY_TO_BE_SHOWN_TO_THE_STREET",
        "BROKERCREDIT": "BROKERS_SALES_CREDIT",
        "INTERNALPX": "OFFER_PRICE_TO_BE_SHOWN_TO_INTERNAL_BROKERS",
        "INTERNALQTY": "OFFER_QUANTITY_TO_BE_SHOWN_TO_INTERNAL_BROKERS",
        "LEAVEQTY": "THE_MINIMUM_RESIDUAL_OFFER_QUANTITY",
        "MAXORDQTY": "MAXIMUM_ORDER_SIZE",
        "ORDRINCR": "ORDER_QUANTITY_INCREMENT",
        "PRIMARY": "PRIMARY_OR_SECONDARY_MARKET_INDICATOR",
        "SALESCREDITOVR": "BROKER_SALES_CREDIT_OVERRIDE",
        "TRADERCREDIT": "TRADERS_CREDIT",
        "DISCOUNT": "DISCOUNT_RATE",
        "YTM": "YIELD_TO_MATURITY"
      }
    },
    "234": {
      "name": "StipulationValue",
      "number": 234,
      "tags": "",
      "enum": {}
    },
    "235": {
      "name": "YieldType",
      "number": 235,
      "tags": "",
      "enum": {
        "AFTERTAX": "AFTER_TAX_YIELD",
        "ANNUAL": "ANNUAL_YIELD",
        "ATISSUE": "YIELD_AT_ISSUE",
        "AVGMATURITY": "YIELD_TO_AVG_MATURITY",
        "BOOK": "BOOK_YIELD",
        "CALL": "YIELD_TO_NEXT_CALL",
        "CHANGE": "YIELD_CHANGE_SINCE_CLOSE",
        "CLOSE": "CLOSING_YIELD",
        "COMPOUND": "COMPOUND_YIELD",
        "CURRENT": "CURRENT_YIELD",
        "GOVTEQUIV": "GVNT_EQUIVALENT_YIELD",
        "GROSS": "TRUE_GROSS_YIELD",
        "INFLATION": "YIELD_WITH_INFLATION_ASSUMPTION",
        "INVERSEFLOATER": "INVERSE_FLOATER_BOND_YIELD",
        "LASTCLOSE": "MOST_RECENT_CLOSING_YIELD",
        "LASTMONTH": "CLOSING_YIELD_MOST_RECENT_MONTH",
        "LASTQUARTER": "CLOSING_YIELD_MOST_RECENT_QUARTER",
        "LASTYEAR": "CLOSING_YIELD_MOST_RECENT_YEAR",
        "LONGAVGLIFE": "YIELD_TO_LONGEST_AVERAGE_LIFE",
        "MARK": "MARK_TO_MARKET_YIELD",
        "MATURITY": "YIELD_TO_MATURITY",
        "NEXTREFUND": "YIELD_TO_NEXT_REFUND",
        "OPENAVG": "OPEN_AVERAGE_YIELD",
        "PREVCLOSE": "PREVIOUS_CLOSE_YIELD",
        "PROCEEDS": "PROCEEDS_YIELD",
        "PUT": "YIELD_TO_NEXT_PUT",
        "SEMIANNUAL": "SEMI_ANNUAL_YIELD",
        "SHORTAVGLIFE": "YIELD_TO_SHORTEST_AVERAGE_LIFE",
        "SIMPLE": "SIMPLE_YIELD",
        "TAXEQUIV": "TAX_EQUIVALENT_YIELD",
        "TENDER": "YIELD_TO_TENDER_DATE",
        "TRUE": "TRUE_YIELD",
        "VALUE1_32": "YIELD_VALUE_OF_1_32",
        "WORST": "YIELD_TO_WORST"
      }
    },
    "236": {
      "name": "Yield",
      "number": 236,
      "tags": "",
      "enum": {}
    },
    "237": {
      "name": "TotalTakedown",
      "number": 237,
      "tags": "",
      "enum": {}
    },
    "238": {
      "name": "Concession",
      "number": 238,
      "tags": "",
      "enum": {}
    },
    "239": {
      "name": "RepoCollateralSecurityType",
      "number": 239,
      "tags": "",
      "enum": {}
    },
    "240": {
      "name": "RedemptionDate",
      "number": 240,
      "tags": "",
      "enum": {}
    },
    "241": {
      "name": "UnderlyingCouponPaymentDate",
      "number": 241,
      "tags": "",
      "enum": {}
    },
    "242": {
      "name": "UnderlyingIssueDate",
      "number": 242,
      "tags": "",
      "enum": {}
    },
    "243": {
      "name": "UnderlyingRepoCollateralSecurityType",
      "number": 243,
      "tags": "",
      "enum": {}
    },
    "244": {
      "name": "UnderlyingRepurchaseTerm",
      "number": 244,
      "tags": "",
      "enum": {}
    },
    "245": {
      "name": "UnderlyingRepurchaseRate",
      "number": 245,
      "tags": "",
      "enum": {}
    },
    "246": {
      "name": "UnderlyingFactor",
      "number": 246,
      "tags": "",
      "enum": {}
    },
    "247": {
      "name": "UnderlyingRedemptionDate",
      "number": 247,
      "tags": "",
      "enum": {}
    },
    "248": {
      "name": "LegCouponPaymentDate",
      "number": 248,
      "tags": "",
      "enum": {}
    },
    "249": {
      "name": "LegIssueDate",
      "number": 249,
      "tags": "",
      "enum": {}
    },
    "250": {
      "name": "LegRepoCollateralSecurityType",
      "number": 250,
      "tags": "",
      "enum": {}
    },
    "251": {
      "name": "LegRepurchaseTerm",
      "number": 251,
      "tags": "",
      "enum": {}
    },
    "252": {
      "name": "LegRepurchaseRate",
      "number": 252,
      "tags": "",
      "enum": {}
    },
    "253": {
      "name": "LegFactor",
      "number": 253,
      "tags": "",
      "enum": {}
    },
    "254": {
      "name": "LegRedemptionDate",
      "number": 254,
      "tags": "",
      "enum": {}
    },
    "255": {
      "name": "CreditRating",
      "number": 255,
      "tags": "",
      "enum": {}
    },
    "256": {
      "name": "UnderlyingCreditRating",
      "number": 256,
      "tags": "",
      "enum": {}
    },
    "257": {
      "name": "LegCreditRating",
      "number": 257,
      "tags": "",
      "enum": {}
    },
    "258": {
      "name": "TradedFlatSwitch",
      "number": 258,
      "tags": "",
      "enum": {
        "N": "NOT_TRADED_FLAT",
        "Y": "TRADED_FLAT"
      }
    },
    "259": {
      "name": "BasisFeatureDate",
      "number": 259,
      "tags": "",
      "enum": {}
    },
    "260": {
      "name": "BasisFeaturePrice",
      "number": 260,
      "tags": "",
      "enum": {}
    },
    "262": {
      "name": "MDReqID",
      "number": 262,
      "tags": "",
      "enum": {}
    },
    "263": {
      "name": "SubscriptionRequestType",
      "number": 263,
      "tags": "",
      "enum": {
        "0": "SNAPSHOT",
        "1": "SNAPSHOT_UPDATES",
        "2": "DISABLE_PREVIOUS_SNAPSHOT_UPDATE_REQUEST"
      }
    },
    "264": {
      "name": "MarketDepth",
      "number": 264,
      "tags": "",
      "enum": {}
    },
    "265": {
      "name": "MDUpdateType",
      "number": 265,
      "tags": "",
      "enum": {
        "0": "FULL_REFRESH",
        "1": "INCREMENTAL_REFRESH"
      }
    },
    "266": {
      "name": "AggregatedBook",
      "number": 266,
      "tags": "",
      "enum": {
        "Y": "BOOK_ENTRIES_TO_BE_AGGREGATED",
        "N": "BOOK_ENTRIES_SHOULD_NOT_BE_AGGREGATED"
      }
    },
    "267": {
      "name": "NoMDEntryTypes",
      "number": 267,
      "tags": "",
      "enum": {}
    },
    "268": {
      "name": "NoMDEntries",
      "number": 268,
      "tags": "",
      "enum": {}
    },
    "269": {
      "name": "MDEntryType",
      "number": 269,
      "tags": "",
      "enum": {
        "0": "BID",
        "1": "OFFER",
        "2": "TRADE",
        "3": "INDEX_VALUE",
        "4": "OPENING_PRICE",
        "5": "CLOSING_PRICE",
        "6": "SETTLEMENT_PRICE",
        "7": "TRADING_SESSION_HIGH_PRICE",
        "8": "TRADING_SESSION_LOW_PRICE",
        "9": "TRADING_SESSION_VWAP_PRICE",
        "A": "IMBALANCE",
        "B": "TRADE_VOLUME",
        "C": "OPEN_INTEREST",
        "D": "COMPOSITE_UNDERLYING_PRICE",
        "E": "SIMULATED_SELL_PRICE",
        "F": "SIMULATED_BUY_PRICE",
        "G": "MARGIN_RATE",
        "H": "MID_PRICE",
        "J": "EMPTY_BOOK",
        "K": "SETTLE_HIGH_PRICE",
        "L": "SETTLE_LOW_PRICE",
        "M": "PRIOR_SETTLE_PRICE",
        "N": "SESSION_HIGH_BID",
        "O": "SESSION_LOW_OFFER",
        "P": "EARLY_PRICES",
        "Q": "AUCTION_CLEARING_PRICE",
        "S": "SWAP_VALUE_FACTOR",
        "R": "DAILY_VALUE_ADJUSTMENT_FOR_LONG_POSITIONS",
        "T": "CUMULATIVE_VALUE_ADJUSTMENT_FOR_LONG_POSITIONS",
        "U": "DAILY_VALUE_ADJUSTMENT_FOR_SHORT_POSITIONS",
        "V": "CUMULATIVE_VALUE_ADJUSTMENT_FOR_SHORT_POSITIONS",
        "W": "FIXING_PRICE",
        "X": "CASH_RATE",
        "Y": "RECOVERY_RATE",
        "Z": "RECOVERY_RATE_FOR_LONG",
        "a": "RECOVERY_RATE_FOR_SHORT"
      }
    },
    "270": {
      "name": "MDEntryPx",
      "number": 270,
      "tags": "",
      "enum": {}
    },
    "271": {
      "name": "MDEntrySize",
      "number": 271,
      "tags": "",
      "enum": {}
    },
    "272": {
      "name": "MDEntryDate",
      "number": 272,
      "tags": "",
      "enum": {}
    },
    "273": {
      "name": "MDEntryTime",
      "number": 273,
      "tags": "",
      "enum": {}
    },
    "274": {
      "name": "TickDirection",
      "number": 274,
      "tags": "",
      "enum": {
        "0": "PLUS_TICK",
        "1": "ZERO_PLUS_TICK",
        "2": "MINUS_TICK",
        "3": "ZERO_MINUS_TICK"
      }
    },
    "275": {
      "name": "MDMkt",
      "number": 275,
      "tags": "",
      "enum": {}
    },
    "276": {
      "name": "QuoteCondition",
      "number": 276,
      "tags": "",
      "enum": {
        "A": "OPEN_ACTIVE",
        "B": "CLOSED_INACTIVE",
        "C": "EXCHANGE_BEST",
        "D": "CONSOLIDATED_BEST",
        "E": "LOCKED",
        "F": "CROSSED",
        "G": "DEPTH",
        "H": "FAST_TRADING",
        "I": "NON_FIRM",
        "L": "MANUAL_SLOW_QUOTE",
        "J": "OUTRIGHT_PRICE",
        "K": "IMPLIED_PRICE",
        "M": "DEPTH_ON_OFFER",
        "N": "DEPTH_ON_BID",
        "O": "CLOSING",
        "P": "NEWS_DISSEMINATION",
        "Q": "TRADING_RANGE",
        "R": "ORDER_INFLUX",
        "S": "DUE_TO_RELATED",
        "T": "NEWS_PENDING",
        "U": "ADDITIONAL_INFO",
        "V": "ADDITIONAL_INFO_DUE_TO_RELATED",
        "W": "RESUME",
        "X": "VIEW_OF_COMMON",
        "Y": "VOLUME_ALERT",
        "Z": "ORDER_IMBALANCE",
        "a": "EQUIPMENT_CHANGEOVER",
        "b": "NO_OPEN_NO_RESUME",
        "c": "REGULAR_ETH",
        "d": "AUTOMATIC_EXECUTION",
        "e": "AUTOMATIC_EXECUTION_ETH",
        "f": "FAST_MARKET_ETH",
        "g": "INACTIVE_ETH",
        "h": "ROTATION",
        "i": "ROTATION_ETH",
        "j": "HALT",
        "k": "HALT_ETH",
        "l": "DUE_TO_NEWS_DISSEMINATION",
        "m": "DUE_TO_NEWS_PENDING",
        "n": "TRADING_RESUME",
        "o": "OUT_OF_SEQUENCE",
        "p": "BID_SPECIALIST",
        "q": "OFFER_SPECIALIST",
        "r": "BID_OFFER_SPECIALIST",
        "s": "END_OF_DAY_SAM",
        "t": "FORBIDDEN_SAM",
        "u": "FROZEN_SAM",
        "v": "PREOPENING_SAM",
        "w": "OPENING_SAM",
        "x": "OPEN_SAM",
        "y": "SURVEILLANCE_SAM",
        "z": "SUSPENDED_SAM",
        "0": "RESERVED_SAM",
        "1": "NO_ACTIVE_SAM",
        "2": "RESTRICTED",
        "3": "REST_OF_BOOK_VWAP",
        "4": "BETTER_PRICES_IN_CONDITIONAL_ORDERS",
        "5": "MEDIAN_PRICE",
        "6": "FULL_CURVE",
        "7": "FLAT_CURVE"
      }
    },
    "277": {
      "name": "TradeCondition",
      "number": 277,
      "tags": "",
      "enum": {
        "A": "CASH_MARKET",
        "B": "AVERAGE_PRICE_TRADE",
        "C": "CASH_TRADE",
        "D": "NEXT_DAY_MARKET",
        "E": "OPENING_REOPENING_TRADE_DETAIL",
        "F": "INTRADAY_TRADE_DETAIL",
        "G": "RULE_127_TRADE",
        "H": "RULE_155_TRADE",
        "I": "SOLD_LAST",
        "J": "NEXT_DAY_TRADE",
        "K": "OPENED",
        "L": "SELLER",
        "M": "SOLD",
        "N": "STOPPED_STOCK",
        "P": "IMBALANCE_MORE_BUYERS",
        "Q": "IMBALANCE_MORE_SELLERS",
        "R": "OPENING_PRICE",
        "S": "BARGAIN_CONDITION",
        "T": "CONVERTED_PRICE_INDICATOR",
        "U": "EXCHANGE_LAST",
        "V": "FINAL_PRICE_OF_SESSION",
        "W": "EX_PIT",
        "X": "CROSSED",
        "Y": "TRADES_RESULTING_FROM_MANUAL_SLOW_QUOTE",
        "Z": "TRADES_RESULTING_FROM_INTERMARKET_SWEEP",
        "a": "VOLUME_ONLY",
        "b": "DIRECT_PLUS",
        "c": "ACQUISITION",
        "d": "BUNCHED",
        "e": "DISTRIBUTION",
        "f": "BUNCHED_SALE",
        "g": "SPLIT_TRADE",
        "h": "CANCEL_STOPPED",
        "i": "CANCEL_ETH",
        "j": "CANCEL_STOPPED_ETH",
        "k": "OUT_OF_SEQUENCE_ETH",
        "l": "CANCEL_LAST_ETH",
        "m": "SOLD_LAST_SALE_ETH",
        "n": "CANCEL_LAST",
        "o": "SOLD_LAST_SALE",
        "p": "CANCEL_OPEN",
        "q": "CANCEL_OPEN_ETH",
        "r": "OPENED_SALE_ETH",
        "s": "CANCEL_ONLY",
        "t": "CANCEL_ONLY_ETH",
        "u": "LATE_OPEN_ETH",
        "v": "AUTO_EXECUTION_ETH",
        "w": "REOPEN",
        "x": "REOPEN_ETH",
        "y": "ADJUSTED",
        "z": "ADJUSTED_ETH",
        "AA": "SPREAD",
        "AB": "SPREAD_ETH",
        "AC": "STRADDLE",
        "AD": "STRADDLE_ETH",
        "AE": "STOPPED",
        "AF": "STOPPED_ETH",
        "AG": "REGULAR_ETH",
        "AH": "COMBO",
        "AI": "COMBO_ETH",
        "AJ": "OFFICIAL_CLOSING_PRICE",
        "AK": "PRIOR_REFERENCE_PRICE",
        "0": "CANCEL",
        "AL": "STOPPED_SOLD_LAST",
        "AM": "STOPPED_OUT_OF_SEQUENCE",
        "AN": "OFFICAL_CLOSING_PRICE",
        "AO": "CROSSED_1",
        "AP": "FAST_MARKET",
        "AQ": "AUTOMATIC_EXECUTION",
        "AR": "FORM_T",
        "AS": "BASKET_INDEX",
        "AT": "BURST_BASKET",
        "AV": "OUTSIDE_SPREAD",
        "1": "IMPLIED_TRADE",
        "2": "MARKETPLACE_ENTERED_TRADE",
        "3": "MULT_ASSET_CLASS_MULTILEG_TRADE",
        "4": "MULTILEG_TO_MULTILEG_TRADE"
      }
    },
    "278": {
      "name": "MDEntryID",
      "number": 278,
      "tags": "",
      "enum": {}
    },
    "279": {
      "name": "MDUpdateAction",
      "number": 279,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "CHANGE",
        "2": "DELETE",
        "3": "DELETE_THRU",
        "4": "DELETE_FROM",
        "5": "OVERLAY"
      }
    },
    "280": {
      "name": "MDEntryRefID",
      "number": 280,
      "tags": "",
      "enum": {}
    },
    "281": {
      "name": "MDReqRejReason",
      "number": 281,
      "tags": "",
      "enum": {
        "0": "UNKNOWN_SYMBOL",
        "1": "DUPLICATE_MDREQID",
        "2": "INSUFFICIENT_BANDWIDTH",
        "3": "INSUFFICIENT_PERMISSIONS",
        "4": "UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE",
        "5": "UNSUPPORTED_MARKETDEPTH",
        "6": "UNSUPPORTED_MDUPDATETYPE",
        "7": "UNSUPPORTED_AGGREGATEDBOOK",
        "8": "UNSUPPORTED_MDENTRYTYPE",
        "9": "UNSUPPORTED_TRADINGSESSIONID",
        "A": "UNSUPPORTED_SCOPE",
        "B": "UNSUPPORTED_OPENCLOSESETTLEFLAG",
        "C": "UNSUPPORTED_MDIMPLICITDELETE",
        "D": "INSUFFICIENT_CREDIT"
      }
    },
    "282": {
      "name": "MDEntryOriginator",
      "number": 282,
      "tags": "",
      "enum": {}
    },
    "283": {
      "name": "LocationID",
      "number": 283,
      "tags": "",
      "enum": {}
    },
    "284": {
      "name": "DeskID",
      "number": 284,
      "tags": "",
      "enum": {}
    },
    "285": {
      "name": "DeleteReason",
      "number": 285,
      "tags": "",
      "enum": {
        "0": "CANCELLATION_TRADE_BUST",
        "1": "ERROR"
      }
    },
    "286": {
      "name": "OpenCloseSettlFlag",
      "number": 286,
      "tags": "",
      "enum": {
        "0": "DAILY_OPEN_CLOSE_SETTLEMENT_ENTRY",
        "1": "SESSION_OPEN_CLOSE_SETTLEMENT_ENTRY",
        "2": "DELIVERY_SETTLEMENT_ENTRY",
        "3": "EXPECTED_ENTRY",
        "4": "ENTRY_FROM_PREVIOUS_BUSINESS_DAY",
        "5": "THEORETICAL_PRICE_VALUE"
      }
    },
    "287": {
      "name": "SellerDays",
      "number": 287,
      "tags": "",
      "enum": {}
    },
    "288": {
      "name": "MDEntryBuyer",
      "number": 288,
      "tags": "",
      "enum": {}
    },
    "289": {
      "name": "MDEntrySeller",
      "number": 289,
      "tags": "",
      "enum": {}
    },
    "290": {
      "name": "MDEntryPositionNo",
      "number": 290,
      "tags": "",
      "enum": {}
    },
    "291": {
      "name": "FinancialStatus",
      "number": 291,
      "tags": "",
      "enum": {
        "1": "BANKRUPT",
        "2": "PENDING_DELISTING",
        "3": "RESTRICTED"
      }
    },
    "292": {
      "name": "CorporateAction",
      "number": 292,
      "tags": "",
      "enum": {
        "A": "EX_DIVIDEND",
        "B": "EX_DISTRIBUTION",
        "C": "EX_RIGHTS",
        "D": "NEW",
        "E": "EX_INTEREST",
        "F": "CASH_DIVIDEND",
        "G": "STOCK_DIVIDEND",
        "H": "NON_INTEGER_STOCK_SPLIT",
        "I": "REVERSE_STOCK_SPLIT",
        "J": "STANDARD_INTEGER_STOCK_SPLIT",
        "K": "POSITION_CONSOLIDATION",
        "L": "LIQUIDATION_REORGANIZATION",
        "M": "MERGER_REORGANIZATION",
        "N": "RIGHTS_OFFERING",
        "O": "SHAREHOLDER_MEETING",
        "P": "SPINOFF",
        "Q": "TENDER_OFFER",
        "R": "WARRANT",
        "S": "SPECIAL_ACTION",
        "T": "SYMBOL_CONVERSION",
        "U": "CUSIP_NAME_CHANGE",
        "V": "LEAP_ROLLOVER",
        "W": "SUCCESSION_EVENT"
      }
    },
    "293": {
      "name": "DefBidSize",
      "number": 293,
      "tags": "",
      "enum": {}
    },
    "294": {
      "name": "DefOfferSize",
      "number": 294,
      "tags": "",
      "enum": {}
    },
    "295": {
      "name": "NoQuoteEntries",
      "number": 295,
      "tags": "",
      "enum": {}
    },
    "296": {
      "name": "NoQuoteSets",
      "number": 296,
      "tags": "",
      "enum": {}
    },
    "297": {
      "name": "QuoteStatus",
      "number": 297,
      "tags": "",
      "enum": {
        "0": "ACCEPTED",
        "1": "CANCEL_FOR_SYMBOL",
        "2": "CANCELED_FOR_SECURITY_TYPE",
        "3": "CANCELED_FOR_UNDERLYING",
        "4": "CANCELED_ALL",
        "5": "REJECTED",
        "6": "REMOVED_FROM_MARKET",
        "7": "EXPIRED",
        "8": "QUERY",
        "9": "QUOTE_NOT_FOUND",
        "10": "PENDING",
        "11": "PASS",
        "12": "LOCKED_MARKET_WARNING",
        "13": "CROSS_MARKET_WARNING",
        "14": "CANCELED_DUE_TO_LOCK_MARKET",
        "15": "CANCELED_DUE_TO_CROSS_MARKET",
        "16": "ACTIVE",
        "17": "CANCELED",
        "18": "UNSOLICITED_QUOTE_REPLENISHMENT",
        "19": "PENDING_END_TRADE",
        "20": "TOO_LATE_TO_END"
      }
    },
    "298": {
      "name": "QuoteCancelType",
      "number": 298,
      "tags": "",
      "enum": {
        "1": "CANCEL_FOR_ONE_OR_MORE_SECURITIES",
        "2": "CANCEL_FOR_SECURITY_TYPE",
        "3": "CANCEL_FOR_UNDERLYING_SECURITY",
        "4": "CANCEL_ALL_QUOTES",
        "5": "CANCEL_QUOTE_SPECIFIED_IN_QUOTEID",
        "6": "CANCEL_BY_QUOTETYPE",
        "7": "CANCEL_FOR_SECURITY_ISSUER",
        "8": "CANCEL_FOR_ISSUER_OF_UNDERLYING_SECURITY"
      }
    },
    "299": {
      "name": "QuoteEntryID",
      "number": 299,
      "tags": "",
      "enum": {}
    },
    "300": {
      "name": "QuoteRejectReason",
      "number": 300,
      "tags": "",
      "enum": {
        "1": "UNKNOWN_SYMBOL",
        "2": "EXCHANGE_CLOSED",
        "3": "QUOTE_REQUEST_EXCEEDS_LIMIT",
        "4": "TOO_LATE_TO_ENTER",
        "5": "UNKNOWN_QUOTE",
        "6": "DUPLICATE_QUOTE",
        "7": "INVALID_BID_ASK_SPREAD",
        "8": "INVALID_PRICE",
        "9": "NOT_AUTHORIZED_TO_QUOTE_SECURITY",
        "10": "PRICE_EXCEEDS_CURRENT_PRICE_BAND",
        "11": "QUOTE_LOCKED_UNABLE_TO_UPDATE_CANCEL",
        "12": "INVALID_OR_UNKNOWN_SECURITY_ISSUER",
        "13": "INVALID_OR_UNKNOWN_ISSUER_OF_UNDERLYING_SECURITY",
        "99": "OTHER"
      }
    },
    "301": {
      "name": "QuoteResponseLevel",
      "number": 301,
      "tags": "",
      "enum": {
        "0": "NO_ACKNOWLEDGEMENT",
        "1": "ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES",
        "2": "ACKNOWLEDGE_EACH_QUOTE_MESSAGE",
        "3": "SUMMARY_ACKNOWLEDGEMENT"
      }
    },
    "302": {
      "name": "QuoteSetID",
      "number": 302,
      "tags": "",
      "enum": {}
    },
    "303": {
      "name": "QuoteRequestType",
      "number": 303,
      "tags": "",
      "enum": {
        "1": "MANUAL",
        "2": "AUTOMATIC"
      }
    },
    "304": {
      "name": "TotNoQuoteEntries",
      "number": 304,
      "tags": "",
      "enum": {}
    },
    "305": {
      "name": "UnderlyingSecurityIDSource",
      "number": 305,
      "tags": "",
      "enum": {}
    },
    "306": {
      "name": "UnderlyingIssuer",
      "number": 306,
      "tags": "",
      "enum": {}
    },
    "307": {
      "name": "UnderlyingSecurityDesc",
      "number": 307,
      "tags": "",
      "enum": {}
    },
    "308": {
      "name": "UnderlyingSecurityExchange",
      "number": 308,
      "tags": "",
      "enum": {}
    },
    "309": {
      "name": "UnderlyingSecurityID",
      "number": 309,
      "tags": "",
      "enum": {}
    },
    "310": {
      "name": "UnderlyingSecurityType",
      "number": 310,
      "tags": "",
      "enum": {}
    },
    "311": {
      "name": "UnderlyingSymbol",
      "number": 311,
      "tags": "",
      "enum": {}
    },
    "312": {
      "name": "UnderlyingSymbolSfx",
      "number": 312,
      "tags": "",
      "enum": {}
    },
    "313": {
      "name": "UnderlyingMaturityMonthYear",
      "number": 313,
      "tags": "",
      "enum": {}
    },
    "314": {
      "name": "UnderlyingMaturityDay",
      "number": 314,
      "tags": "",
      "enum": {}
    },
    "315": {
      "name": "UnderlyingPutOrCall",
      "number": 315,
      "tags": "",
      "enum": {}
    },
    "316": {
      "name": "UnderlyingStrikePrice",
      "number": 316,
      "tags": "",
      "enum": {}
    },
    "317": {
      "name": "UnderlyingOptAttribute",
      "number": 317,
      "tags": "",
      "enum": {}
    },
    "318": {
      "name": "UnderlyingCurrency",
      "number": 318,
      "tags": "",
      "enum": {}
    },
    "319": {
      "name": "RatioQty",
      "number": 319,
      "tags": "",
      "enum": {}
    },
    "320": {
      "name": "SecurityReqID",
      "number": 320,
      "tags": "",
      "enum": {}
    },
    "321": {
      "name": "SecurityRequestType",
      "number": 321,
      "tags": "",
      "enum": {
        "0": "REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS",
        "1": "REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED",
        "2": "REQUEST_LIST_SECURITY_TYPES",
        "3": "REQUEST_LIST_SECURITIES",
        "4": "SYMBOL",
        "5": "SECURITYTYPE_AND_OR_CFICODE",
        "6": "PRODUCT",
        "7": "TRADINGSESSIONID",
        "8": "ALL_SECURITIES",
        "9": "MARKETID_OR_MARKETID_MARKETSEGMENTID"
      }
    },
    "322": {
      "name": "SecurityResponseID",
      "number": 322,
      "tags": "",
      "enum": {}
    },
    "323": {
      "name": "SecurityResponseType",
      "number": 323,
      "tags": "",
      "enum": {
        "1": "ACCEPT_SECURITY_PROPOSAL_AS_IS",
        "2": "ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE",
        "3": "LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST",
        "4": "LIST_OF_SECURITIES_RETURNED_PER_REQUEST",
        "5": "REJECT_SECURITY_PROPOSAL",
        "6": "CANNOT_MATCH_SELECTION_CRITERIA"
      }
    },
    "324": {
      "name": "SecurityStatusReqID",
      "number": 324,
      "tags": "",
      "enum": {}
    },
    "325": {
      "name": "UnsolicitedIndicator",
      "number": 325,
      "tags": "",
      "enum": {
        "N": "MESSAGE_IS_BEING_SENT_AS_A_RESULT_OF_A_PRIOR_REQUEST",
        "Y": "MESSAGE_IS_BEING_SENT_UNSOLICITED"
      }
    },
    "326": {
      "name": "SecurityTradingStatus",
      "number": 326,
      "tags": "",
      "enum": {
        "1": "OPENING_DELAY",
        "2": "TRADING_HALT",
        "3": "RESUME",
        "4": "NO_OPEN_NO_RESUME",
        "5": "PRICE_INDICATION",
        "6": "TRADING_RANGE_INDICATION",
        "7": "MARKET_IMBALANCE_BUY",
        "8": "MARKET_IMBALANCE_SELL",
        "9": "MARKET_ON_CLOSE_IMBALANCE_BUY",
        "10": "MARKET_ON_CLOSE_IMBALANCE_SELL",
        "12": "NO_MARKET_IMBALANCE",
        "13": "NO_MARKET_ON_CLOSE_IMBALANCE",
        "14": "ITS_PRE_OPENING",
        "15": "NEW_PRICE_INDICATION",
        "16": "TRADE_DISSEMINATION_TIME",
        "17": "READY_TO_TRADE",
        "18": "NOT_AVAILABLE_FOR_TRADING",
        "19": "NOT_TRADED_ON_THIS_MARKET",
        "20": "UNKNOWN_OR_INVALID",
        "21": "PRE_OPEN",
        "22": "OPENING_ROTATION",
        "23": "FAST_MARKET",
        "24": "PRE_CROSS_SYSTEM_IS_IN_A_PRE_CROSS_STATE_ALLOWING_MARKET_TO_RESPOND_TO_EITHER_SIDE_OF_CROSS",
        "25": "CROSS_SYSTEM_HAS_CROSSED_A_PERCENTAGE_OF_THE_ORDERS_AND_ALLOWS_MARKET_TO_RESPOND_PRIOR_TO_CROSSING_REMAINING_PORTION",
        "26": "POST_CLOSE"
      }
    },
    "327": {
      "name": "HaltReason",
      "number": 327,
      "tags": "",
      "enum": {
        "0": "NEWS_DISSEMINATION",
        "1": "ORDER_INFLUX",
        "2": "ORDER_IMBALANCE",
        "3": "ADDITIONAL_INFORMATION",
        "4": "NEWS_PENDING",
        "5": "EQUIPMENT_CHANGEOVER"
      }
    },
    "328": {
      "name": "InViewOfCommon",
      "number": 328,
      "tags": "",
      "enum": {
        "N": "HALT_WAS_NOT_RELATED_TO_A_HALT_OF_THE_COMMON_STOCK",
        "Y": "HALT_WAS_DUE_TO_COMMON_STOCK_BEING_HALTED"
      }
    },
    "329": {
      "name": "DueToRelated",
      "number": 329,
      "tags": "",
      "enum": {
        "N": "HALT_WAS_NOT_RELATED_TO_A_HALT_OF_THE_RELATED_SECURITY",
        "Y": "HALT_WAS_DUE_TO_RELATED_SECURITY_BEING_HALTED"
      }
    },
    "330": {
      "name": "BuyVolume",
      "number": 330,
      "tags": "",
      "enum": {}
    },
    "331": {
      "name": "SellVolume",
      "number": 331,
      "tags": "",
      "enum": {}
    },
    "332": {
      "name": "HighPx",
      "number": 332,
      "tags": "",
      "enum": {}
    },
    "333": {
      "name": "LowPx",
      "number": 333,
      "tags": "",
      "enum": {}
    },
    "334": {
      "name": "Adjustment",
      "number": 334,
      "tags": "",
      "enum": {
        "1": "CANCEL",
        "2": "ERROR",
        "3": "CORRECTION"
      }
    },
    "335": {
      "name": "TradSesReqID",
      "number": 335,
      "tags": "",
      "enum": {}
    },
    "336": {
      "name": "TradingSessionID",
      "number": 336,
      "tags": "",
      "enum": {
        "1": "DAY",
        "2": "HALFDAY",
        "3": "MORNING",
        "4": "AFTERNOON",
        "5": "EVENING",
        "6": "AFTER_HOURS"
      }
    },
    "337": {
      "name": "ContraTrader",
      "number": 337,
      "tags": "",
      "enum": {}
    },
    "338": {
      "name": "TradSesMethod",
      "number": 338,
      "tags": "",
      "enum": {
        "1": "ELECTRONIC",
        "2": "OPEN_OUTCRY",
        "3": "TWO_PARTY"
      }
    },
    "339": {
      "name": "TradSesMode",
      "number": 339,
      "tags": "",
      "enum": {
        "1": "TESTING",
        "2": "SIMULATED",
        "3": "PRODUCTION"
      }
    },
    "340": {
      "name": "TradSesStatus",
      "number": 340,
      "tags": "",
      "enum": {
        "0": "UNKNOWN",
        "1": "HALTED",
        "2": "OPEN",
        "3": "CLOSED",
        "4": "PRE_OPEN",
        "5": "PRE_CLOSE",
        "6": "REQUEST_REJECTED"
      }
    },
    "341": {
      "name": "TradSesStartTime",
      "number": 341,
      "tags": "",
      "enum": {}
    },
    "342": {
      "name": "TradSesOpenTime",
      "number": 342,
      "tags": "",
      "enum": {}
    },
    "343": {
      "name": "TradSesPreCloseTime",
      "number": 343,
      "tags": "",
      "enum": {}
    },
    "344": {
      "name": "TradSesCloseTime",
      "number": 344,
      "tags": "",
      "enum": {}
    },
    "345": {
      "name": "TradSesEndTime",
      "number": 345,
      "tags": "",
      "enum": {}
    },
    "346": {
      "name": "NumberOfOrders",
      "number": 346,
      "tags": "",
      "enum": {}
    },
    "347": {
      "name": "MessageEncoding",
      "number": 347,
      "tags": "header",
      "enum": {}
    },
    "348": {
      "name": "EncodedIssuerLen",
      "number": 348,
      "tags": "",
      "enum": {}
    },
    "349": {
      "name": "EncodedIssuer",
      "number": 349,
      "tags": "",
      "enum": {}
    },
    "350": {
      "name": "EncodedSecurityDescLen",
      "number": 350,
      "tags": "",
      "enum": {}
    },
    "351": {
      "name": "EncodedSecurityDesc",
      "number": 351,
      "tags": "",
      "enum": {}
    },
    "352": {
      "name": "EncodedListExecInstLen",
      "number": 352,
      "tags": "",
      "enum": {}
    },
    "353": {
      "name": "EncodedListExecInst",
      "number": 353,
      "tags": "",
      "enum": {}
    },
    "354": {
      "name": "EncodedTextLen",
      "number": 354,
      "tags": "",
      "enum": {}
    },
    "355": {
      "name": "EncodedText",
      "number": 355,
      "tags": "",
      "enum": {}
    },
    "356": {
      "name": "EncodedSubjectLen",
      "number": 356,
      "tags": "",
      "enum": {}
    },
    "357": {
      "name": "EncodedSubject",
      "number": 357,
      "tags": "",
      "enum": {}
    },
    "358": {
      "name": "EncodedHeadlineLen",
      "number": 358,
      "tags": "",
      "enum": {}
    },
    "359": {
      "name": "EncodedHeadline",
      "number": 359,
      "tags": "",
      "enum": {}
    },
    "360": {
      "name": "EncodedAllocTextLen",
      "number": 360,
      "tags": "",
      "enum": {}
    },
    "361": {
      "name": "EncodedAllocText",
      "number": 361,
      "tags": "",
      "enum": {}
    },
    "362": {
      "name": "EncodedUnderlyingIssuerLen",
      "number": 362,
      "tags": "",
      "enum": {}
    },
    "363": {
      "name": "EncodedUnderlyingIssuer",
      "number": 363,
      "tags": "",
      "enum": {}
    },
    "364": {
      "name": "EncodedUnderlyingSecurityDescLen",
      "number": 364,
      "tags": "",
      "enum": {}
    },
    "365": {
      "name": "EncodedUnderlyingSecurityDesc",
      "number": 365,
      "tags": "",
      "enum": {}
    },
    "366": {
      "name": "AllocPrice",
      "number": 366,
      "tags": "",
      "enum": {}
    },
    "367": {
      "name": "QuoteSetValidUntilTime",
      "number": 367,
      "tags": "",
      "enum": {}
    },
    "368": {
      "name": "QuoteEntryRejectReason",
      "number": 368,
      "tags": "",
      "enum": {}
    },
    "369": {
      "name": "LastMsgSeqNumProcessed",
      "number": 369,
      "tags": "header",
      "enum": {}
    },
    "370": {
      "name": "OnBehalfOfSendingTime",
      "number": 370,
      "tags": "header",
      "enum": {}
    },
    "371": {
      "name": "RefTagID",
      "number": 371,
      "tags": "",
      "enum": {}
    },
    "372": {
      "name": "RefMsgType",
      "number": 372,
      "tags": "",
      "enum": {}
    },
    "373": {
      "name": "SessionRejectReason",
      "number": 373,
      "tags": "",
      "enum": {
        "0": "INVALID_TAG_NUMBER",
        "1": "REQUIRED_TAG_MISSING",
        "2": "TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE",
        "3": "UNDEFINED_TAG",
        "4": "TAG_SPECIFIED_WITHOUT_A_VALUE",
        "5": "VALUE_IS_INCORRECT",
        "6": "INCORRECT_DATA_FORMAT_FOR_VALUE",
        "7": "DECRYPTION_PROBLEM",
        "8": "SIGNATURE_PROBLEM",
        "9": "COMPID_PROBLEM",
        "10": "SENDINGTIME_ACCURACY_PROBLEM",
        "11": "INVALID_MSGTYPE",
        "12": "XML_VALIDATION_ERROR",
        "13": "TAG_APPEARS_MORE_THAN_ONCE",
        "14": "TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER",
        "15": "REPEATING_GROUP_FIELDS_OUT_OF_ORDER",
        "16": "INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP",
        "17": "NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER",
        "18": "INVALID_UNSUPPORTED_APPLICATION_VERSION",
        "99": "OTHER"
      }
    },
    "374": {
      "name": "BidRequestTransType",
      "number": 374,
      "tags": "",
      "enum": {
        "C": "CANCEL",
        "N": "NEW"
      }
    },
    "375": {
      "name": "ContraBroker",
      "number": 375,
      "tags": "",
      "enum": {}
    },
    "376": {
      "name": "ComplianceID",
      "number": 376,
      "tags": "",
      "enum": {}
    },
    "377": {
      "name": "SolicitedFlag",
      "number": 377,
      "tags": "",
      "enum": {
        "N": "WAS_NOT_SOLICITED",
        "Y": "WAS_SOLICITED"
      }
    },
    "378": {
      "name": "ExecRestatementReason",
      "number": 378,
      "tags": "",
      "enum": {
        "0": "GT_CORPORATE_ACTION",
        "1": "GT_RENEWAL_RESTATEMENT",
        "2": "VERBAL_CHANGE",
        "3": "REPRICING_OF_ORDER",
        "4": "BROKER_OPTION",
        "5": "PARTIAL_DECLINE_OF_ORDERQTY",
        "6": "CANCEL_ON_TRADING_HALT",
        "7": "CANCEL_ON_SYSTEM_FAILURE",
        "8": "MARKET_OPTION",
        "9": "CANCELED_NOT_BEST",
        "10": "WAREHOUSE_RECAP",
        "11": "PEG_REFRESH",
        "99": "OTHER"
      }
    },
    "379": {
      "name": "BusinessRejectRefID",
      "number": 379,
      "tags": "",
      "enum": {}
    },
    "380": {
      "name": "BusinessRejectReason",
      "number": 380,
      "tags": "",
      "enum": {
        "0": "OTHER",
        "1": "UNKNOWN_ID",
        "2": "UNKNOWN_SECURITY",
        "3": "UNSUPPORTED_MESSAGE_TYPE",
        "4": "APPLICATION_NOT_AVAILABLE",
        "5": "CONDITIONALLY_REQUIRED_FIELD_MISSING",
        "6": "NOT_AUTHORIZED",
        "7": "DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME",
        "18": "INVALID_PRICE_INCREMENT"
      }
    },
    "381": {
      "name": "GrossTradeAmt",
      "number": 381,
      "tags": "",
      "enum": {}
    },
    "382": {
      "name": "NoContraBrokers",
      "number": 382,
      "tags": "",
      "enum": {}
    },
    "383": {
      "name": "MaxMessageSize",
      "number": 383,
      "tags": "",
      "enum": {}
    },
    "384": {
      "name": "NoMsgTypes",
      "number": 384,
      "tags": "",
      "enum": {}
    },
    "385": {
      "name": "MsgDirection",
      "number": 385,
      "tags": "",
      "enum": {
        "R": "RECEIVE",
        "S": "SEND"
      }
    },
    "386": {
      "name": "NoTradingSessions",
      "number": 386,
      "tags": "",
      "enum": {}
    },
    "387": {
      "name": "TotalVolumeTraded",
      "number": 387,
      "tags": "",
      "enum": {}
    },
    "388": {
      "name": "DiscretionInst",
      "number": 388,
      "tags": "",
      "enum": {
        "0": "RELATED_TO_DISPLAYED_PRICE",
        "1": "RELATED_TO_MARKET_PRICE",
        "2": "RELATED_TO_PRIMARY_PRICE",
        "3": "RELATED_TO_LOCAL_PRIMARY_PRICE",
        "4": "RELATED_TO_MIDPOINT_PRICE",
        "5": "RELATED_TO_LAST_TRADE_PRICE",
        "6": "RELATED_TO_VWAP",
        "7": "AVERAGE_PRICE_GUARANTEE"
      }
    },
    "389": {
      "name": "DiscretionOffsetValue",
      "number": 389,
      "tags": "",
      "enum": {}
    },
    "390": {
      "name": "BidID",
      "number": 390,
      "tags": "",
      "enum": {}
    },
    "391": {
      "name": "ClientBidID",
      "number": 391,
      "tags": "",
      "enum": {}
    },
    "392": {
      "name": "ListName",
      "number": 392,
      "tags": "",
      "enum": {}
    },
    "393": {
      "name": "TotNoRelatedSym",
      "number": 393,
      "tags": "",
      "enum": {}
    },
    "394": {
      "name": "BidType",
      "number": 394,
      "tags": "",
      "enum": {
        "1": "NON_DISCLOSED_STYLE",
        "2": "DISCLOSED_SYTLE",
        "3": "NO_BIDDING_PROCESS"
      }
    },
    "395": {
      "name": "NumTickets",
      "number": 395,
      "tags": "",
      "enum": {}
    },
    "396": {
      "name": "SideValue1",
      "number": 396,
      "tags": "",
      "enum": {}
    },
    "397": {
      "name": "SideValue2",
      "number": 397,
      "tags": "",
      "enum": {}
    },
    "398": {
      "name": "NoBidDescriptors",
      "number": 398,
      "tags": "",
      "enum": {}
    },
    "399": {
      "name": "BidDescriptorType",
      "number": 399,
      "tags": "",
      "enum": {
        "1": "SECTOR",
        "2": "COUNTRY",
        "3": "INDEX"
      }
    },
    "400": {
      "name": "BidDescriptor",
      "number": 400,
      "tags": "",
      "enum": {}
    },
    "401": {
      "name": "SideValueInd",
      "number": 401,
      "tags": "",
      "enum": {
        "1": "SIDE_VALUE_1",
        "2": "SIDE_VALUE_2"
      }
    },
    "402": {
      "name": "LiquidityPctLow",
      "number": 402,
      "tags": "",
      "enum": {}
    },
    "403": {
      "name": "LiquidityPctHigh",
      "number": 403,
      "tags": "",
      "enum": {}
    },
    "404": {
      "name": "LiquidityValue",
      "number": 404,
      "tags": "",
      "enum": {}
    },
    "405": {
      "name": "EFPTrackingError",
      "number": 405,
      "tags": "",
      "enum": {}
    },
    "406": {
      "name": "FairValue",
      "number": 406,
      "tags": "",
      "enum": {}
    },
    "407": {
      "name": "OutsideIndexPct",
      "number": 407,
      "tags": "",
      "enum": {}
    },
    "408": {
      "name": "ValueOfFutures",
      "number": 408,
      "tags": "",
      "enum": {}
    },
    "409": {
      "name": "LiquidityIndType",
      "number": 409,
      "tags": "",
      "enum": {
        "1": "_5_DAY_MOVING_AVERAGE",
        "2": "_20_DAY_MOVING_AVERAGE",
        "3": "NORMAL_MARKET_SIZE",
        "4": "OTHER"
      }
    },
    "410": {
      "name": "WtAverageLiquidity",
      "number": 410,
      "tags": "",
      "enum": {}
    },
    "411": {
      "name": "ExchangeForPhysical",
      "number": 411,
      "tags": "",
      "enum": {
        "N": "FALSE",
        "Y": "TRUE"
      }
    },
    "412": {
      "name": "OutMainCntryUIndex",
      "number": 412,
      "tags": "",
      "enum": {}
    },
    "413": {
      "name": "CrossPercent",
      "number": 413,
      "tags": "",
      "enum": {}
    },
    "414": {
      "name": "ProgRptReqs",
      "number": 414,
      "tags": "",
      "enum": {
        "1": "BUY_SIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUE_REQUEST_THE_SELL_SIDE_FIRM_CAN_HOWEVER_SEND_A_DONE_STATUS_LIST_STATUS_RESPONSE_IN_AN_UNSOLICITED_FASHION",
        "2": "SELL_SIDE_PERIODICALLY_SENDS_STATUS_USING_LIST_STATUS_PERIOD_OPTIONALLY_SPECIFIED_IN_PROGRESSPERIOD_",
        "3": "REAL_TIME_EXECUTION_REPORTS"
      }
    },
    "415": {
      "name": "ProgPeriodInterval",
      "number": 415,
      "tags": "",
      "enum": {}
    },
    "416": {
      "name": "IncTaxInd",
      "number": 416,
      "tags": "",
      "enum": {
        "1": "NET",
        "2": "GROSS"
      }
    },
    "417": {
      "name": "NumBidders",
      "number": 417,
      "tags": "",
      "enum": {}
    },
    "418": {
      "name": "BidTradeType",
      "number": 418,
      "tags": "",
      "enum": {
        "A": "AGENCY",
        "G": "VWAP_GUARANTEE",
        "J": "GUARANTEED_CLOSE",
        "R": "RISK_TRADE"
      }
    },
    "419": {
      "name": "BasisPxType",
      "number": 419,
      "tags": "",
      "enum": {
        "2": "CLOSING_PRICE_AT_MORNING_SESSION",
        "3": "CLOSING_PRICE",
        "4": "CURRENT_PRICE",
        "5": "SQ",
        "6": "VWAP_THROUGH_A_DAY",
        "7": "VWAP_THROUGH_A_MORNING_SESSION",
        "8": "VWAP_THROUGH_AN_AFTERNOON_SESSION",
        "9": "VWAP_THROUGH_A_DAY_EXCEPT_YORI",
        "A": "VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI",
        "B": "VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI",
        "C": "STRIKE",
        "D": "OPEN",
        "Z": "OTHERS"
      }
    },
    "420": {
      "name": "NoBidComponents",
      "number": 420,
      "tags": "",
      "enum": {}
    },
    "421": {
      "name": "Country",
      "number": 421,
      "tags": "",
      "enum": {}
    },
    "422": {
      "name": "TotNoStrikes",
      "number": 422,
      "tags": "",
      "enum": {}
    },
    "423": {
      "name": "PriceType",
      "number": 423,
      "tags": "",
      "enum": {
        "1": "PERCENTAGE",
        "2": "PER_UNIT",
        "3": "FIXED_AMOUNT",
        "4": "DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR",
        "5": "PREMIUM_PERCENTAGE_POINTS_OVER_PAR",
        "6": "SPREAD",
        "7": "TED_PRICE",
        "8": "TED_YIELD",
        "9": "YIELD",
        "10": "FIXED_CABINET_TRADE_PRICE",
        "11": "VARIABLE_CABINET_TRADE_PRICE",
        "13": "PRODUCT_TICKS_IN_HALFS",
        "14": "PRODUCT_TICKS_IN_FOURTHS",
        "15": "PRODUCT_TICKS_IN_EIGHTS",
        "16": "PRODUCT_TICKS_IN_SIXTEENTHS",
        "17": "PRODUCT_TICKS_IN_THIRTY_SECONDS",
        "18": "PRODUCT_TICKS_IN_SIXTY_FORTHS",
        "19": "PRODUCT_TICKS_IN_ONE_TWENTY_EIGHTS"
      }
    },
    "424": {
      "name": "DayOrderQty",
      "number": 424,
      "tags": "",
      "enum": {}
    },
    "425": {
      "name": "DayCumQty",
      "number": 425,
      "tags": "",
      "enum": {}
    },
    "426": {
      "name": "DayAvgPx",
      "number": 426,
      "tags": "",
      "enum": {}
    },
    "427": {
      "name": "GTBookingInst",
      "number": 427,
      "tags": "",
      "enum": {
        "0": "BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION",
        "1": "ACCUMULATE_EXECTUIONS_UNTIL_FORDER_IS_FILLED_OR_EXPIRES",
        "2": "ACCUMULATE_UNTIL_VERBALLLY_NOTIFIED_OTHERWISE"
      }
    },
    "428": {
      "name": "NoStrikes",
      "number": 428,
      "tags": "",
      "enum": {}
    },
    "429": {
      "name": "ListStatusType",
      "number": 429,
      "tags": "",
      "enum": {
        "1": "ACK",
        "2": "RESPONSE",
        "3": "TIMED",
        "4": "EXEC_STARTED",
        "5": "ALL_DONE",
        "6": "ALERT"
      }
    },
    "430": {
      "name": "NetGrossInd",
      "number": 430,
      "tags": "",
      "enum": {
        "1": "NET",
        "2": "GROSS"
      }
    },
    "431": {
      "name": "ListOrderStatus",
      "number": 431,
      "tags": "",
      "enum": {
        "1": "IN_BIDDING_PROCESS",
        "2": "RECEIVED_FOR_EXECUTION",
        "3": "EXECUTING",
        "4": "CANCELLING",
        "5": "ALERT",
        "6": "ALL_DONE",
        "7": "REJECT"
      }
    },
    "432": {
      "name": "ExpireDate",
      "number": 432,
      "tags": "",
      "enum": {}
    },
    "433": {
      "name": "ListExecInstType",
      "number": 433,
      "tags": "",
      "enum": {
        "1": "IMMEDIATE",
        "2": "WAIT_FOR_EXECUT_INSTRUCTION",
        "3": "EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN",
        "4": "EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP",
        "5": "EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW"
      }
    },
    "434": {
      "name": "CxlRejResponseTo",
      "number": 434,
      "tags": "",
      "enum": {
        "1": "ORDER_CANCEL_REQUEST",
        "2": "ORDER_CANCEL_REPLACE_REQUEST"
      }
    },
    "435": {
      "name": "UnderlyingCouponRate",
      "number": 435,
      "tags": "",
      "enum": {}
    },
    "436": {
      "name": "UnderlyingContractMultiplier",
      "number": 436,
      "tags": "",
      "enum": {}
    },
    "437": {
      "name": "ContraTradeQty",
      "number": 437,
      "tags": "",
      "enum": {}
    },
    "438": {
      "name": "ContraTradeTime",
      "number": 438,
      "tags": "",
      "enum": {}
    },
    "439": {
      "name": "ClearingFirm",
      "number": 439,
      "tags": "",
      "enum": {}
    },
    "440": {
      "name": "ClearingAccount",
      "number": 440,
      "tags": "",
      "enum": {}
    },
    "441": {
      "name": "LiquidityNumSecurities",
      "number": 441,
      "tags": "",
      "enum": {}
    },
    "442": {
      "name": "MultiLegReportingType",
      "number": 442,
      "tags": "",
      "enum": {
        "1": "SINGLE_SECURITY",
        "2": "INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY",
        "3": "MULTI_LEG_SECURITY"
      }
    },
    "443": {
      "name": "StrikeTime",
      "number": 443,
      "tags": "",
      "enum": {}
    },
    "444": {
      "name": "ListStatusText",
      "number": 444,
      "tags": "",
      "enum": {}
    },
    "445": {
      "name": "EncodedListStatusTextLen",
      "number": 445,
      "tags": "",
      "enum": {}
    },
    "446": {
      "name": "EncodedListStatusText",
      "number": 446,
      "tags": "",
      "enum": {}
    },
    "447": {
      "name": "PartyIDSource",
      "number": 447,
      "tags": "",
      "enum": {
        "6": "UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER",
        "1": "KOREAN_INVESTOR_ID",
        "I": "DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT",
        "B": "BIC",
        "7": "US_SOCIAL_SECURITY_NUMBER",
        "2": "TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII_FID",
        "C": "GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER",
        "8": "US_EMPLOYER_OR_TAX_ID_NUMBER",
        "3": "TAIWANESE_TRADING_ACCT",
        "D": "PROPRIETARY_CUSTOM_CODE",
        "9": "AUSTRALIAN_BUSINESS_NUMBER",
        "4": "MALAYSIAN_CENTRAL_DEPOSITORY_NUMBER",
        "E": "ISO_COUNTRY_CODE",
        "A": "AUSTRALIAN_TAX_FILE_NUMBER",
        "5": "CHINESE_INVESTOR_ID",
        "F": "SETTLEMENT_ENTITY_LOCATION",
        "G": "MIC",
        "H": "CSD_PARTICIPANT_MEMBER_CODE"
      }
    },
    "448": {
      "name": "PartyID",
      "number": 448,
      "tags": "",
      "enum": {}
    },
    "449": {
      "name": "TotalVolumeTradedDate",
      "number": 449,
      "tags": "",
      "enum": {}
    },
    "450": {
      "name": "TotalVolumeTradedTime",
      "number": 450,
      "tags": "",
      "enum": {}
    },
    "451": {
      "name": "NetChgPrevDay",
      "number": 451,
      "tags": "",
      "enum": {}
    },
    "452": {
      "name": "PartyRole",
      "number": 452,
      "tags": "",
      "enum": {
        "1": "EXECUTING_FIRM",
        "2": "BROKER_OF_CREDIT",
        "3": "CLIENT_ID",
        "4": "CLEARING_FIRM",
        "5": "INVESTOR_ID",
        "6": "INTRODUCING_FIRM",
        "7": "ENTERING_FIRM",
        "8": "LOCATE_LENDING_FIRM",
        "9": "FUND_MANAGER_CLIENT_ID",
        "10": "SETTLEMENT_LOCATION",
        "11": "ORDER_ORIGINATION_TRADER",
        "12": "EXECUTING_TRADER",
        "13": "ORDER_ORIGINATION_FIRM",
        "14": "GIVEUP_CLEARING_FIRM",
        "15": "CORRESPONDANT_CLEARING_FIRM",
        "16": "EXECUTING_SYSTEM",
        "17": "CONTRA_FIRM",
        "18": "CONTRA_CLEARING_FIRM",
        "19": "SPONSORING_FIRM",
        "20": "UNDERLYING_CONTRA_FIRM",
        "21": "CLEARING_ORGANIZATION",
        "22": "EXCHANGE",
        "24": "CUSTOMER_ACCOUNT",
        "25": "CORRESPONDENT_CLEARING_ORGANIZATION",
        "26": "CORRESPONDENT_BROKER",
        "27": "BUYER_SELLER",
        "28": "CUSTODIAN",
        "29": "INTERMEDIARY",
        "30": "AGENT",
        "31": "SUB_CUSTODIAN",
        "32": "BENEFICIARY",
        "33": "INTERESTED_PARTY",
        "34": "REGULATORY_BODY",
        "35": "LIQUIDITY_PROVIDER",
        "36": "ENTERING_TRADER",
        "37": "CONTRA_TRADER",
        "38": "POSITION_ACCOUNT",
        "39": "CONTRA_INVESTOR_ID",
        "40": "TRANSFER_TO_FIRM",
        "41": "CONTRA_POSITION_ACCOUNT",
        "42": "CONTRA_EXCHANGE",
        "43": "INTERNAL_CARRY_ACCOUNT",
        "44": "ORDER_ENTRY_OPERATOR_ID",
        "45": "SECONDARY_ACCOUNT_NUMBER",
        "46": "FOREIGN_FIRM",
        "47": "THIRD_PARTY_ALLOCATION_FIRM",
        "48": "CLAIMING_ACCOUNT",
        "49": "ASSET_MANAGER",
        "50": "PLEDGOR_ACCOUNT",
        "51": "PLEDGEE_ACCOUNT",
        "52": "LARGE_TRADER_REPORTABLE_ACCOUNT",
        "53": "TRADER_MNEMONIC",
        "54": "SENDER_LOCATION",
        "55": "SESSION_ID",
        "56": "ACCEPTABLE_COUNTERPARTY",
        "57": "UNACCEPTABLE_COUNTERPARTY",
        "58": "ENTERING_UNIT",
        "59": "EXECUTING_UNIT",
        "60": "INTRODUCING_BROKER",
        "61": "QUOTE_ORIGINATOR",
        "62": "REPORT_ORIGINATOR",
        "63": "SYSTEMATIC_INTERNALISER",
        "64": "MULTILATERAL_TRADING_FACILITY",
        "65": "REGULATED_MARKET",
        "66": "MARKET_MAKER",
        "67": "INVESTMENT_FIRM",
        "68": "HOST_COMPETENT_AUTHORITY",
        "69": "HOME_COMPETENT_AUTHORITY",
        "70": "COMPETENT_AUTHORITY_OF_THE_MOST_RELEVANT_MARKET_IN_TERMS_OF_LIQUIDITY",
        "71": "COMPETENT_AUTHORITY_OF_THE_TRANSACTION",
        "72": "REPORTING_INTERMEDIARY",
        "73": "EXECUTION_VENUE",
        "74": "MARKET_DATA_ENTRY_ORIGINATOR",
        "75": "LOCATION_ID",
        "76": "DESK_ID",
        "77": "MARKET_DATA_MARKET",
        "78": "ALLOCATION_ENTITY",
        "79": "PRIME_BROKER_PROVIDING_GENERAL_TRADE_SERVICES",
        "80": "STEP_OUT_FIRM",
        "81": "BROKERCLEARINGID",
        "82": "CENTRAL_REGISTRATION_DEPOSITORY",
        "83": "CLEARING_ACCOUNT",
        "84": "ACCEPTABLE_SETTLING_COUNTERPARTY",
        "85": "UNACCEPTABLE_SETTLING_COUNTERPARTY"
      }
    },
    "453": {
      "name": "NoPartyIDs",
      "number": 453,
      "tags": "",
      "enum": {}
    },
    "454": {
      "name": "NoSecurityAltID",
      "number": 454,
      "tags": "",
      "enum": {}
    },
    "455": {
      "name": "SecurityAltID",
      "number": 455,
      "tags": "",
      "enum": {}
    },
    "456": {
      "name": "SecurityAltIDSource",
      "number": 456,
      "tags": "",
      "enum": {}
    },
    "457": {
      "name": "NoUnderlyingSecurityAltID",
      "number": 457,
      "tags": "",
      "enum": {}
    },
    "458": {
      "name": "UnderlyingSecurityAltID",
      "number": 458,
      "tags": "",
      "enum": {}
    },
    "459": {
      "name": "UnderlyingSecurityAltIDSource",
      "number": 459,
      "tags": "",
      "enum": {}
    },
    "460": {
      "name": "Product",
      "number": 460,
      "tags": "",
      "enum": {
        "1": "AGENCY",
        "2": "COMMODITY",
        "3": "CORPORATE",
        "4": "CURRENCY",
        "5": "EQUITY",
        "6": "GOVERNMENT",
        "7": "INDEX",
        "8": "LOAN",
        "9": "MONEYMARKET",
        "10": "MORTGAGE",
        "11": "MUNICIPAL",
        "12": "OTHER",
        "13": "FINANCING"
      }
    },
    "461": {
      "name": "CFICode",
      "number": 461,
      "tags": "",
      "enum": {}
    },
    "462": {
      "name": "UnderlyingProduct",
      "number": 462,
      "tags": "",
      "enum": {}
    },
    "463": {
      "name": "UnderlyingCFICode",
      "number": 463,
      "tags": "",
      "enum": {}
    },
    "464": {
      "name": "TestMessageIndicator",
      "number": 464,
      "tags": "",
      "enum": {
        "N": "FALES",
        "Y": "TRUE"
      }
    },
    "465": {
      "name": "QuantityType",
      "number": 465,
      "tags": "",
      "enum": {
        "1": "SHARES",
        "2": "BONDS",
        "3": "CURRENTFACE",
        "4": "ORIGINALFACE",
        "5": "CURRENCY",
        "6": "CONTRACTS",
        "7": "OTHER",
        "8": "PAR"
      }
    },
    "466": {
      "name": "BookingRefID",
      "number": 466,
      "tags": "",
      "enum": {}
    },
    "467": {
      "name": "IndividualAllocID",
      "number": 467,
      "tags": "",
      "enum": {}
    },
    "468": {
      "name": "RoundingDirection",
      "number": 468,
      "tags": "",
      "enum": {
        "0": "ROUND_TO_NEAREST",
        "1": "ROUND_DOWN",
        "2": "ROUND_UP"
      }
    },
    "469": {
      "name": "RoundingModulus",
      "number": 469,
      "tags": "",
      "enum": {}
    },
    "470": {
      "name": "CountryOfIssue",
      "number": 470,
      "tags": "",
      "enum": {}
    },
    "471": {
      "name": "StateOrProvinceOfIssue",
      "number": 471,
      "tags": "",
      "enum": {}
    },
    "472": {
      "name": "LocaleOfIssue",
      "number": 472,
      "tags": "",
      "enum": {}
    },
    "473": {
      "name": "NoRegistDtls",
      "number": 473,
      "tags": "",
      "enum": {}
    },
    "474": {
      "name": "MailingDtls",
      "number": 474,
      "tags": "",
      "enum": {}
    },
    "475": {
      "name": "InvestorCountryOfResidence",
      "number": 475,
      "tags": "",
      "enum": {}
    },
    "476": {
      "name": "PaymentRef",
      "number": 476,
      "tags": "",
      "enum": {}
    },
    "477": {
      "name": "DistribPaymentMethod",
      "number": 477,
      "tags": "",
      "enum": {
        "1": "CREST",
        "2": "NSCC",
        "3": "EUROCLEAR",
        "4": "CLEARSTREAM",
        "5": "CHEQUE",
        "6": "TELEGRAPHIC_TRANSFER",
        "7": "FED_WIRE",
        "8": "DIRECT_CREDIT",
        "9": "ACH_CREDIT",
        "10": "BPAY",
        "11": "HIGH_VALUE_CLEARING_SYSTEM_HVACS",
        "12": "REINVEST_IN_FUND"
      }
    },
    "478": {
      "name": "CashDistribCurr",
      "number": 478,
      "tags": "",
      "enum": {}
    },
    "479": {
      "name": "CommCurrency",
      "number": 479,
      "tags": "",
      "enum": {}
    },
    "480": {
      "name": "CancellationRights",
      "number": 480,
      "tags": "",
      "enum": {
        "Y": "YES",
        "N": "NO_EXECUTION_ONLY",
        "M": "NO_WAIVER_AGREEMENT",
        "O": "NO_INSTITUTIONAL"
      }
    },
    "481": {
      "name": "MoneyLaunderingStatus",
      "number": 481,
      "tags": "",
      "enum": {
        "Y": "PASSED",
        "N": "NOT_CHECKED",
        "1": "EXEMPT_BELOW_THE_LIMIT",
        "2": "EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION",
        "3": "EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION"
      }
    },
    "482": {
      "name": "MailingInst",
      "number": 482,
      "tags": "",
      "enum": {}
    },
    "483": {
      "name": "TransBkdTime",
      "number": 483,
      "tags": "",
      "enum": {}
    },
    "484": {
      "name": "ExecPriceType",
      "number": 484,
      "tags": "",
      "enum": {
        "B": "BID_PRICE",
        "C": "CREATION_PRICE",
        "D": "CREATION_PRICE_PLUS_ADJUSTMENT_PERCENT",
        "E": "CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT",
        "O": "OFFER_PRICE",
        "P": "OFFER_PRICE_MINUS_ADJUSTMENT_PERCENT",
        "Q": "OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT",
        "S": "SINGLE_PRICE"
      }
    },
    "485": {
      "name": "ExecPriceAdjustment",
      "number": 485,
      "tags": "",
      "enum": {}
    },
    "486": {
      "name": "DateOfBirth",
      "number": 486,
      "tags": "",
      "enum": {}
    },
    "487": {
      "name": "TradeReportTransType",
      "number": 487,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "CANCEL",
        "2": "REPLACE",
        "3": "RELEASE",
        "4": "REVERSE",
        "5": "CANCEL_DUE_TO_BACK_OUT_OF_TRADE"
      }
    },
    "488": {
      "name": "CardHolderName",
      "number": 488,
      "tags": "",
      "enum": {}
    },
    "489": {
      "name": "CardNumber",
      "number": 489,
      "tags": "",
      "enum": {}
    },
    "490": {
      "name": "CardExpDate",
      "number": 490,
      "tags": "",
      "enum": {}
    },
    "491": {
      "name": "CardIssNum",
      "number": 491,
      "tags": "",
      "enum": {}
    },
    "492": {
      "name": "PaymentMethod",
      "number": 492,
      "tags": "",
      "enum": {
        "1": "CREST",
        "2": "NSCC",
        "3": "EUROCLEAR",
        "4": "CLEARSTREAM",
        "5": "CHEQUE",
        "6": "TELEGRAPHIC_TRANSFER",
        "7": "FED_WIRE",
        "8": "DEBIT_CARD",
        "9": "DIRECT_DEBIT",
        "10": "DIRECT_CREDIT",
        "11": "CREDIT_CARD",
        "12": "ACH_DEBIT",
        "13": "ACH_CREDIT",
        "14": "BPAY",
        "15": "HIGH_VALUE_CLEARING_SYSTEM"
      }
    },
    "493": {
      "name": "RegistAcctType",
      "number": 493,
      "tags": "",
      "enum": {}
    },
    "494": {
      "name": "Designation",
      "number": 494,
      "tags": "",
      "enum": {}
    },
    "495": {
      "name": "TaxAdvantageType",
      "number": 495,
      "tags": "",
      "enum": {
        "0": "NONE_NOT_APPLICABLE",
        "1": "MAXI_ISA",
        "2": "TESSA",
        "3": "MINI_CASH_ISA",
        "4": "MINI_STOCKS_AND_SHARES_ISA",
        "5": "MINI_INSURANCE_ISA",
        "6": "CURRENT_YEAR_PAYMENT",
        "7": "PRIOR_YEAR_PAYMENT",
        "8": "ASSET_TRANSFER",
        "9": "EMPLOYEE_PRIOR_YEAR",
        "10": "EMPLOYEE_CURRENT_YEAR",
        "11": "EMPLOYER_PRIOR_YEAR",
        "12": "EMPLOYER_CURRENT_YEAR",
        "13": "NON_FUND_PROTOTYPE_IRA",
        "14": "NON_FUND_QUALIFIED_PLAN",
        "15": "DEFINED_CONTRIBUTION_PLAN",
        "16": "INDIVIDUAL_RETIREMENT_ACCOUNT",
        "17": "INDIVIDUAL_RETIREMENT_ACCOUNT_ROLLOVER",
        "18": "KEOGH",
        "19": "PROFIT_SHARING_PLAN",
        "20": "_401",
        "21": "SELF_DIRECTED_IRA",
        "22": "_403",
        "23": "_457",
        "24": "ROTH_IRA",
        "25": "ROTH_IRA_1",
        "26": "ROTH_CONVERSION_IRA",
        "27": "ROTH_CONVERSION_IRA_1",
        "28": "EDUCATION_IRA",
        "29": "EDUCATION_IRA_1",
        "999": "OTHER"
      }
    },
    "496": {
      "name": "RegistRejReasonText",
      "number": 496,
      "tags": "",
      "enum": {}
    },
    "497": {
      "name": "FundRenewWaiv",
      "number": 497,
      "tags": "",
      "enum": {
        "N": "NO",
        "Y": "YES"
      }
    },
    "498": {
      "name": "CashDistribAgentName",
      "number": 498,
      "tags": "",
      "enum": {}
    },
    "499": {
      "name": "CashDistribAgentCode",
      "number": 499,
      "tags": "",
      "enum": {}
    },
    "500": {
      "name": "CashDistribAgentAcctNumber",
      "number": 500,
      "tags": "",
      "enum": {}
    },
    "501": {
      "name": "CashDistribPayRef",
      "number": 501,
      "tags": "",
      "enum": {}
    },
    "502": {
      "name": "CashDistribAgentAcctName",
      "number": 502,
      "tags": "",
      "enum": {}
    },
    "503": {
      "name": "CardStartDate",
      "number": 503,
      "tags": "",
      "enum": {}
    },
    "504": {
      "name": "PaymentDate",
      "number": 504,
      "tags": "",
      "enum": {}
    },
    "505": {
      "name": "PaymentRemitterID",
      "number": 505,
      "tags": "",
      "enum": {}
    },
    "506": {
      "name": "RegistStatus",
      "number": 506,
      "tags": "",
      "enum": {
        "A": "ACCEPTED",
        "R": "REJECTED",
        "H": "HELD",
        "N": "REMINDER_I_E_REGISTRATION_INSTRUCTIONS_ARE_STILL_OUTSTANDING"
      }
    },
    "507": {
      "name": "RegistRejReasonCode",
      "number": 507,
      "tags": "",
      "enum": {
        "1": "INVALID_UNACCEPTABLE_ACCOUNT_TYPE",
        "2": "INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE",
        "3": "INVALID_UNACCEPTABLE_OWNERSHIP_TYPE",
        "4": "INVALID_UNACCEPTABLE_NO_REG_DETAILS",
        "5": "INVALID_UNACCEPTABLE_REG_SEQ_NO",
        "6": "INVALID_UNACCEPTABLE_REG_DETAILS",
        "7": "INVALID_UNACCEPTABLE_MAILING_DETAILS",
        "8": "INVALID_UNACCEPTABLE_MAILING_INSTRUCTIONS",
        "9": "INVALID_UNACCEPTABLE_INVESTOR_ID",
        "10": "INVALID_UNACEEPTABLE_INVESTOR_ID_SOURCE",
        "11": "INVALID_UNACCEPTABLE_DATE_OF_BIRTH",
        "12": "INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE",
        "13": "INVALID_UNACCEPTABLE_NO_DISTRIB_INSTNS",
        "14": "INVALID_UNACCEPTABLE_DISTRIB_PERCENTAGE",
        "15": "INVALID_UNACCEPTABLE_DISTRIB_PAYMENT_METHOD",
        "16": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NAME",
        "17": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_CODE",
        "18": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NUM",
        "99": "OTHER"
      }
    },
    "508": {
      "name": "RegistRefID",
      "number": 508,
      "tags": "",
      "enum": {}
    },
    "509": {
      "name": "RegistDtls",
      "number": 509,
      "tags": "",
      "enum": {}
    },
    "510": {
      "name": "NoDistribInsts",
      "number": 510,
      "tags": "",
      "enum": {}
    },
    "511": {
      "name": "RegistEmail",
      "number": 511,
      "tags": "",
      "enum": {}
    },
    "512": {
      "name": "DistribPercentage",
      "number": 512,
      "tags": "",
      "enum": {}
    },
    "513": {
      "name": "RegistID",
      "number": 513,
      "tags": "",
      "enum": {}
    },
    "514": {
      "name": "RegistTransType",
      "number": 514,
      "tags": "",
      "enum": {
        "0": "NEW",
        "2": "CANCEL",
        "1": "REPLACE"
      }
    },
    "515": {
      "name": "ExecValuationPoint",
      "number": 515,
      "tags": "",
      "enum": {}
    },
    "516": {
      "name": "OrderPercent",
      "number": 516,
      "tags": "",
      "enum": {}
    },
    "517": {
      "name": "OwnershipType",
      "number": 517,
      "tags": "",
      "enum": {
        "J": "JOINT_INVESTORS",
        "T": "TENANTS_IN_COMMON",
        "2": "JOINT_TRUSTEES"
      }
    },
    "518": {
      "name": "NoContAmts",
      "number": 518,
      "tags": "",
      "enum": {}
    },
    "519": {
      "name": "ContAmtType",
      "number": 519,
      "tags": "",
      "enum": {
        "1": "COMMISSION_AMOUNT",
        "2": "COMMISSION_PERCENT",
        "3": "INITIAL_CHARGE_AMOUNT",
        "4": "INITIAL_CHARGE_PERCENT",
        "5": "DISCOUNT_AMOUNT",
        "6": "DISCOUNT_PERCENT",
        "7": "DILUTION_LEVY_AMOUNT",
        "8": "DILUTION_LEVY_PERCENT",
        "9": "EXIT_CHARGE_AMOUNT",
        "10": "EXIT_CHARGE_PERCENT",
        "11": "FUND_BASED_RENEWAL_COMMISSION_PERCENT",
        "12": "PROJECTED_FUND_VALUE",
        "13": "FUND_BASED_RENEWAL_COMMISSION_AMOUNT",
        "14": "FUND_BASED_RENEWAL_COMMISSION_AMOUNT_1",
        "15": "NET_SETTLEMENT_AMOUNT"
      }
    },
    "520": {
      "name": "ContAmtValue",
      "number": 520,
      "tags": "",
      "enum": {}
    },
    "521": {
      "name": "ContAmtCurr",
      "number": 521,
      "tags": "",
      "enum": {}
    },
    "522": {
      "name": "OwnerType",
      "number": 522,
      "tags": "",
      "enum": {
        "1": "INDIVIDUAL_INVESTOR",
        "2": "PUBLIC_COMPANY",
        "3": "PRIVATE_COMPANY",
        "4": "INDIVIDUAL_TRUSTEE",
        "5": "COMPANY_TRUSTEE",
        "6": "PENSION_PLAN",
        "7": "CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT",
        "8": "TRUSTS",
        "9": "FIDUCIARIES",
        "10": "NETWORKING_SUB_ACCOUNT",
        "11": "NON_PROFIT_ORGANIZATION",
        "12": "CORPORATE_BODY",
        "13": "NOMINEE"
      }
    },
    "523": {
      "name": "PartySubID",
      "number": 523,
      "tags": "",
      "enum": {}
    },
    "524": {
      "name": "NestedPartyID",
      "number": 524,
      "tags": "",
      "enum": {}
    },
    "525": {
      "name": "NestedPartyIDSource",
      "number": 525,
      "tags": "",
      "enum": {}
    },
    "526": {
      "name": "SecondaryClOrdID",
      "number": 526,
      "tags": "",
      "enum": {}
    },
    "527": {
      "name": "SecondaryExecID",
      "number": 527,
      "tags": "",
      "enum": {}
    },
    "528": {
      "name": "OrderCapacity",
      "number": 528,
      "tags": "",
      "enum": {
        "A": "AGENCY",
        "G": "PROPRIETARY",
        "I": "INDIVIDUAL",
        "P": "PRINCIPAL",
        "R": "RISKLESS_PRINCIPAL",
        "W": "AGENT_FOR_OTHER_MEMBER"
      }
    },
    "529": {
      "name": "OrderRestrictions",
      "number": 529,
      "tags": "",
      "enum": {
        "1": "PROGRAM_TRADE",
        "2": "INDEX_ARBITRAGE",
        "3": "NON_INDEX_ARBITRAGE",
        "4": "COMPETING_MARKET_MAKER",
        "5": "ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY",
        "6": "ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY",
        "7": "FOREIGN_ENTITY",
        "8": "EXTERNAL_MARKET_PARTICIPANT",
        "9": "EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE",
        "A": "RISKLESS_ARBITRAGE",
        "B": "ISSUER_HOLDING",
        "C": "ISSUE_PRICE_STABILIZATION",
        "D": "NON_ALGORITHMIC",
        "E": "ALGORITHMIC",
        "F": "CROSS"
      }
    },
    "530": {
      "name": "MassCancelRequestType",
      "number": 530,
      "tags": "",
      "enum": {
        "1": "CANCEL_ORDERS_FOR_A_SECURITY",
        "2": "CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY",
        "3": "CANCEL_ORDERS_FOR_A_PRODUCT",
        "4": "CANCEL_ORDERS_FOR_A_CFICODE",
        "5": "CANCEL_ORDERS_FOR_A_SECURITYTYPE",
        "6": "CANCEL_ORDERS_FOR_A_TRADING_SESSION",
        "7": "CANCEL_ALL_ORDERS",
        "8": "CANCEL_ORDERS_FOR_A_MARKET",
        "9": "CANCEL_ORDERS_FOR_A_MARKET_SEGMENT",
        "A": "CANCEL_ORDERS_FOR_A_SECURITY_GROUP",
        "B": "CANCEL_FOR_SECURITY_ISSUER",
        "C": "CANCEL_FOR_ISSUER_OF_UNDERLYING_SECURITY"
      }
    },
    "531": {
      "name": "MassCancelResponse",
      "number": 531,
      "tags": "",
      "enum": {
        "0": "CANCEL_REQUEST_REJECTED_SEE_MASSCANCELREJECTREASON",
        "1": "CANCEL_ORDERS_FOR_A_SECURITY",
        "2": "CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY",
        "3": "CANCEL_ORDERS_FOR_A_PRODUCT",
        "4": "CANCEL_ORDERS_FOR_A_CFICODE",
        "5": "CANCEL_ORDERS_FOR_A_SECURITYTYPE",
        "6": "CANCEL_ORDERS_FOR_A_TRADING_SESSION",
        "7": "CANCEL_ALL_ORDERS",
        "8": "CANCEL_ORDERS_FOR_A_MARKET",
        "9": "CANCEL_ORDERS_FOR_A_MARKET_SEGMENT",
        "A": "CANCEL_ORDERS_FOR_A_SECURITY_GROUP",
        "B": "CANCEL_ORDERS_FOR_A_SECURITIES_ISSUER",
        "C": "CANCEL_ORDERS_FOR_ISSUER_OF_UNDERLYING_SECURITY"
      }
    },
    "532": {
      "name": "MassCancelRejectReason",
      "number": 532,
      "tags": "",
      "enum": {
        "0": "MASS_CANCEL_NOT_SUPPORTED",
        "1": "INVALID_OR_UNKNOWN_SECURITY",
        "2": "INVALID_OR_UNKOWN_UNDERLYING_SECURITY",
        "3": "INVALID_OR_UNKNOWN_PRODUCT",
        "4": "INVALID_OR_UNKNOWN_CFICODE",
        "5": "INVALID_OR_UNKNOWN_SECURITYTYPE",
        "6": "INVALID_OR_UNKNOWN_TRADING_SESSION",
        "7": "INVALID_OR_UNKNOWN_MARKET",
        "8": "INVALID_OR_UNKOWN_MARKET_SEGMENT",
        "9": "INVALID_OR_UNKNOWN_SECURITY_GROUP",
        "10": "INVALID_OR_UNKNOWN_SECURITY_ISSUER",
        "11": "INVALID_OR_UNKNOWN_ISSUER_OF_UNDERLYING_SECURITY",
        "99": "OTHER"
      }
    },
    "533": {
      "name": "TotalAffectedOrders",
      "number": 533,
      "tags": "",
      "enum": {}
    },
    "534": {
      "name": "NoAffectedOrders",
      "number": 534,
      "tags": "",
      "enum": {}
    },
    "535": {
      "name": "AffectedOrderID",
      "number": 535,
      "tags": "",
      "enum": {}
    },
    "536": {
      "name": "AffectedSecondaryOrderID",
      "number": 536,
      "tags": "",
      "enum": {}
    },
    "537": {
      "name": "QuoteType",
      "number": 537,
      "tags": "",
      "enum": {
        "0": "INDICATIVE",
        "1": "TRADEABLE",
        "2": "RESTRICTED_TRADEABLE",
        "3": "COUNTER"
      }
    },
    "538": {
      "name": "NestedPartyRole",
      "number": 538,
      "tags": "",
      "enum": {}
    },
    "539": {
      "name": "NoNestedPartyIDs",
      "number": 539,
      "tags": "",
      "enum": {}
    },
    "540": {
      "name": "TotalAccruedInterestAmt",
      "number": 540,
      "tags": "",
      "enum": {}
    },
    "541": {
      "name": "MaturityDate",
      "number": 541,
      "tags": "",
      "enum": {}
    },
    "542": {
      "name": "UnderlyingMaturityDate",
      "number": 542,
      "tags": "",
      "enum": {}
    },
    "543": {
      "name": "InstrRegistry",
      "number": 543,
      "tags": "",
      "enum": {}
    },
    "544": {
      "name": "CashMargin",
      "number": 544,
      "tags": "",
      "enum": {
        "1": "CASH",
        "2": "MARGIN_OPEN",
        "3": "MARGIN_CLOSE"
      }
    },
    "545": {
      "name": "NestedPartySubID",
      "number": 545,
      "tags": "",
      "enum": {}
    },
    "546": {
      "name": "Scope",
      "number": 546,
      "tags": "",
      "enum": {
        "1": "LOCAL_MARKET",
        "2": "NATIONAL",
        "3": "GLOBAL"
      }
    },
    "547": {
      "name": "MDImplicitDelete",
      "number": 547,
      "tags": "",
      "enum": {
        "N": "SERVER_MUST_SEND_AN_EXPLICIT_DELETE_FOR_BIDS_OR_OFFERS_FALLING_OUTSIDE_THE_REQUESTED_MARKETDEPTH_OF_THE_REQUEST",
        "Y": "CLIENT_HAS_RESPONSIBILITY_FOR_IMPLICITLY_DELETING_BIDS_OR_OFFERS_FALLING_OUTSIDE_THE_MARKETDEPTH_OF_THE_REQUEST"
      }
    },
    "548": {
      "name": "CrossID",
      "number": 548,
      "tags": "",
      "enum": {}
    },
    "549": {
      "name": "CrossType",
      "number": 549,
      "tags": "",
      "enum": {
        "1": "CROSS_AON_CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT_BOTH_SIDES_ARE_TREATED_IN_THE_SAME_MANNER_THIS_IS_EQUIVALENT_TO_AN_ALL_OR_NONE_",
        "2": "CROSS_IOC_CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED_ONE_SIDE_IS_FULLY_EXECUTED_THE_OTHER_SIDE_IS_PARTIALLY_EXECUTED_WITH_THE_REMAINDER_BEING_CANCELLED_THIS_IS_EQUIVALENT_TO_AN_IOC_ON_THE_OTHER_SIDE_NOTE_CROSSPRIORITIZATION_FIELD_MAY_BE_USED_TO_INDICATE_WHICH_SIDE_SHOULD_FULLY_EXECUTE_IN_THIS_SCENARIO_",
        "3": "CROSS_ONE_SIDE_CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE_ONE_SIDE_OF_THE_CROSS_IS_FULLY_EXECUTED_BUT_THE_UNFILLED_PORTION_REMAINS_ACTIVE_",
        "4": "CROSS_SAME_PRICE_CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE_IN_THIS_CASE_OTHER_ORDERS_EXIST_WITH_THE_SAME_PRICE_THE_QUANTITY_OF_THE_CROSS_IS_EXECUTED_AGAINST_THE_EXISTING_ORDERS_AND_QUOTES_THE_REMAINDER_OF_THE_CROSS_IS_EXECUTED_AGAINST_THE_OTHER_SIDE_OF_THE_CROSS_THE_TWO_SIDES_POTENTIALLY_HAVE_DIFFERENT_QUANTITIES_"
      }
    },
    "550": {
      "name": "CrossPrioritization",
      "number": 550,
      "tags": "",
      "enum": {
        "0": "NONE",
        "1": "BUY_SIDE_IS_PRIORITIZED",
        "2": "SELL_SIDE_IS_PRIORITIZED"
      }
    },
    "551": {
      "name": "OrigCrossID",
      "number": 551,
      "tags": "",
      "enum": {}
    },
    "552": {
      "name": "NoSides",
      "number": 552,
      "tags": "",
      "enum": {
        "1": "ONE_SIDE",
        "2": "BOTH_SIDES"
      }
    },
    "553": {
      "name": "Username",
      "number": 553,
      "tags": "",
      "enum": {}
    },
    "554": {
      "name": "Password",
      "number": 554,
      "tags": "",
      "enum": {}
    },
    "555": {
      "name": "NoLegs",
      "number": 555,
      "tags": "",
      "enum": {}
    },
    "556": {
      "name": "LegCurrency",
      "number": 556,
      "tags": "",
      "enum": {}
    },
    "557": {
      "name": "TotNoSecurityTypes",
      "number": 557,
      "tags": "",
      "enum": {}
    },
    "558": {
      "name": "NoSecurityTypes",
      "number": 558,
      "tags": "",
      "enum": {}
    },
    "559": {
      "name": "SecurityListRequestType",
      "number": 559,
      "tags": "",
      "enum": {
        "0": "SYMBOL",
        "1": "SECURITYTYPE_AND_OR_CFICODE",
        "2": "PRODUCT",
        "3": "TRADINGSESSIONID",
        "4": "ALL_SECURITIES",
        "5": "MARKETID_OR_MARKETID_MARKETSEGMENTID"
      }
    },
    "560": {
      "name": "SecurityRequestResult",
      "number": 560,
      "tags": "",
      "enum": {
        "0": "VALID_REQUEST",
        "1": "INVALID_OR_UNSUPPORTED_REQUEST",
        "2": "NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA",
        "3": "NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA",
        "4": "INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE",
        "5": "REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED"
      }
    },
    "561": {
      "name": "RoundLot",
      "number": 561,
      "tags": "",
      "enum": {}
    },
    "562": {
      "name": "MinTradeVol",
      "number": 562,
      "tags": "",
      "enum": {}
    },
    "563": {
      "name": "MultiLegRptTypeReq",
      "number": 563,
      "tags": "",
      "enum": {
        "0": "REPORT_BY_MULITLEG_SECURITY_ONLY",
        "1": "REPORT_BY_MULTILEG_SECURITY_AND_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY",
        "2": "REPORT_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY_ONLY"
      }
    },
    "564": {
      "name": "LegPositionEffect",
      "number": 564,
      "tags": "",
      "enum": {}
    },
    "565": {
      "name": "LegCoveredOrUncovered",
      "number": 565,
      "tags": "",
      "enum": {}
    },
    "566": {
      "name": "LegPrice",
      "number": 566,
      "tags": "",
      "enum": {}
    },
    "567": {
      "name": "TradSesStatusRejReason",
      "number": 567,
      "tags": "",
      "enum": {
        "1": "UNKNOWN_OR_INVALID_TRADINGSESSIONID",
        "99": "OTHER"
      }
    },
    "568": {
      "name": "TradeRequestID",
      "number": 568,
      "tags": "",
      "enum": {}
    },
    "569": {
      "name": "TradeRequestType",
      "number": 569,
      "tags": "",
      "enum": {
        "0": "ALL_TRADES",
        "1": "MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST",
        "2": "UNMATCHED_TRADES_THAT_MATCH_CRITERIA",
        "3": "UNREPORTED_TRADES_THAT_MATCH_CRITERIA",
        "4": "ADVISORIES_THAT_MATCH_CRITERIA"
      }
    },
    "570": {
      "name": "PreviouslyReported",
      "number": 570,
      "tags": "",
      "enum": {
        "N": "NOT_REPORTED_TO_COUNTERPARTY",
        "Y": "PERVIOUSLY_REPORTED_TO_COUNTERPARTY"
      }
    },
    "571": {
      "name": "TradeReportID",
      "number": 571,
      "tags": "",
      "enum": {}
    },
    "572": {
      "name": "TradeReportRefID",
      "number": 572,
      "tags": "",
      "enum": {}
    },
    "573": {
      "name": "MatchStatus",
      "number": 573,
      "tags": "",
      "enum": {
        "0": "COMPARED_MATCHED_OR_AFFIRMED",
        "1": "UNCOMPARED_UNMATCHED_OR_UNAFFIRMED",
        "2": "ADVISORY_OR_ALERT"
      }
    },
    "574": {
      "name": "MatchType",
      "number": 574,
      "tags": "",
      "enum": {
        "A1": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES_AND_EXECUTION_TIME",
        "A2": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES",
        "M3": "ACT_ACCEPTED_TRADE",
        "A3": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES_AND_EXECUTION_TIME",
        "M4": "ACT_DEFAULT_TRADE",
        "A4": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES",
        "M5": "ACT_DEFAULT_AFTER_M2",
        "A5": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADETYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_EXECUTION_TIME",
        "M6": "ACT_M6_MATCH",
        "AQ": "COMPARED_RECORDS_RESULTING_FROM_STAMPED_ADVISORIES_OR_SPECIALIST_ACCEPTS_PAIR_OFFS",
        "S1": "SUMMARIZED_MATCH_USING_A1_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIED",
        "S2": "SUMMARIZED_MATCH_USING_A2_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED",
        "S3": "SUMMARIZED_MATCH_USING_A3_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED",
        "S4": "SUMMARIZED_MATCH_USING_A4_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED",
        "S5": "SUMMARIZED_MATCH_USING_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED",
        "M1": "EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_MINUS_BADGES_AND_TIMES_ACT_M1_MATCH",
        "M2": "SUMMARIZED_MATCH_MINUS_BADGES_AND_TIMES_ACT_M2_MATCH",
        "MT": "OCS_LOCKED_IN_NON_ACT",
        "1": "ONE_PARTY_TRADE_REPORT",
        "2": "TWO_PARTY_TRADE_REPORT",
        "3": "CONFIRMED_TRADE_REPORT",
        "4": "AUTO_MATCH",
        "5": "CROSS_AUCTION",
        "6": "COUNTER_ORDER_SELECTION",
        "7": "CALL_AUCTION",
        "8": "ISSUING_BUY_BACK_AUCTION"
      }
    },
    "575": {
      "name": "OddLot",
      "number": 575,
      "tags": "",
      "enum": {
        "N": "TREAT_AS_ROUND_LOT",
        "Y": "TREAT_AS_ODD_LOT"
      }
    },
    "576": {
      "name": "NoClearingInstructions",
      "number": 576,
      "tags": "",
      "enum": {}
    },
    "577": {
      "name": "ClearingInstruction",
      "number": 577,
      "tags": "",
      "enum": {
        "0": "PROCESS_NORMALLY",
        "1": "EXCLUDE_FROM_ALL_NETTING",
        "2": "BILATERAL_NETTING_ONLY",
        "3": "EX_CLEARING",
        "4": "SPECIAL_TRADE",
        "5": "MULTILATERAL_NETTING",
        "6": "CLEAR_AGAINST_CENTRAL_COUNTERPARTY",
        "7": "EXCLUDE_FROM_CENTRAL_COUNTERPARTY",
        "8": "MANUAL_MODE",
        "9": "AUTOMATIC_POSTING_MODE",
        "10": "AUTOMATIC_GIVE_UP_MODE",
        "11": "QUALIFIED_SERVICE_REPRESENTATIVE_QSR",
        "12": "CUSTOMER_TRADE",
        "13": "SELF_CLEARING"
      }
    },
    "578": {
      "name": "TradeInputSource",
      "number": 578,
      "tags": "",
      "enum": {}
    },
    "579": {
      "name": "TradeInputDevice",
      "number": 579,
      "tags": "",
      "enum": {}
    },
    "580": {
      "name": "NoDates",
      "number": 580,
      "tags": "",
      "enum": {}
    },
    "581": {
      "name": "AccountType",
      "number": 581,
      "tags": "",
      "enum": {
        "1": "ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_THE_BOOKS",
        "2": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS",
        "3": "HOUSE_TRADER",
        "4": "FLOOR_TRADER",
        "6": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED",
        "7": "ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED",
        "8": "JOINT_BACK_OFFICE_ACCOUNT"
      }
    },
    "582": {
      "name": "CustOrderCapacity",
      "number": 582,
      "tags": "",
      "enum": {
        "1": "MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT",
        "2": "CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT",
        "3": "MEMBER_TRADING_FOR_ANOTHER_MEMBER",
        "4": "ALL_OTHER"
      }
    },
    "583": {
      "name": "ClOrdLinkID",
      "number": 583,
      "tags": "",
      "enum": {}
    },
    "584": {
      "name": "MassStatusReqID",
      "number": 584,
      "tags": "",
      "enum": {}
    },
    "585": {
      "name": "MassStatusReqType",
      "number": 585,
      "tags": "",
      "enum": {
        "1": "STATUS_FOR_ORDERS_FOR_A_SECURITY",
        "2": "STATUS_FOR_ORDERS_FOR_AN_UNDERLYING_SECURITY",
        "3": "STATUS_FOR_ORDERS_FOR_A_PRODUCT",
        "4": "STATUS_FOR_ORDERS_FOR_A_CFICODE",
        "5": "STATUS_FOR_ORDERS_FOR_A_SECURITYTYPE",
        "6": "STATUS_FOR_ORDERS_FOR_A_TRADING_SESSION",
        "7": "STATUS_FOR_ALL_ORDERS",
        "8": "STATUS_FOR_ORDERS_FOR_A_PARTYID",
        "9": "STATUS_FOR_SECURITY_ISSUER",
        "10": "STATUS_FOR_ISSUER_OF_UNDERLYING_SECURITY"
      }
    },
    "586": {
      "name": "OrigOrdModTime",
      "number": 586,
      "tags": "",
      "enum": {}
    },
    "587": {
      "name": "LegSettlType",
      "number": 587,
      "tags": "",
      "enum": {}
    },
    "588": {
      "name": "LegSettlDate",
      "number": 588,
      "tags": "",
      "enum": {}
    },
    "589": {
      "name": "DayBookingInst",
      "number": 589,
      "tags": "",
      "enum": {
        "0": "CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR",
        "1": "SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING",
        "2": "ACCUMULATE"
      }
    },
    "590": {
      "name": "BookingUnit",
      "number": 590,
      "tags": "",
      "enum": {
        "0": "EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT",
        "1": "AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER",
        "2": "AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE"
      }
    },
    "591": {
      "name": "PreallocMethod",
      "number": 591,
      "tags": "",
      "enum": {
        "0": "PRO_RATA",
        "1": "DO_NOT_PRO_RATA_DISCUSS_FIRST"
      }
    },
    "592": {
      "name": "UnderlyingCountryOfIssue",
      "number": 592,
      "tags": "",
      "enum": {}
    },
    "593": {
      "name": "UnderlyingStateOrProvinceOfIssue",
      "number": 593,
      "tags": "",
      "enum": {}
    },
    "594": {
      "name": "UnderlyingLocaleOfIssue",
      "number": 594,
      "tags": "",
      "enum": {}
    },
    "595": {
      "name": "UnderlyingInstrRegistry",
      "number": 595,
      "tags": "",
      "enum": {}
    },
    "596": {
      "name": "LegCountryOfIssue",
      "number": 596,
      "tags": "",
      "enum": {}
    },
    "597": {
      "name": "LegStateOrProvinceOfIssue",
      "number": 597,
      "tags": "",
      "enum": {}
    },
    "598": {
      "name": "LegLocaleOfIssue",
      "number": 598,
      "tags": "",
      "enum": {}
    },
    "599": {
      "name": "LegInstrRegistry",
      "number": 599,
      "tags": "",
      "enum": {}
    },
    "600": {
      "name": "LegSymbol",
      "number": 600,
      "tags": "",
      "enum": {}
    },
    "601": {
      "name": "LegSymbolSfx",
      "number": 601,
      "tags": "",
      "enum": {}
    },
    "602": {
      "name": "LegSecurityID",
      "number": 602,
      "tags": "",
      "enum": {}
    },
    "603": {
      "name": "LegSecurityIDSource",
      "number": 603,
      "tags": "",
      "enum": {}
    },
    "604": {
      "name": "NoLegSecurityAltID",
      "number": 604,
      "tags": "",
      "enum": {}
    },
    "605": {
      "name": "LegSecurityAltID",
      "number": 605,
      "tags": "",
      "enum": {}
    },
    "606": {
      "name": "LegSecurityAltIDSource",
      "number": 606,
      "tags": "",
      "enum": {}
    },
    "607": {
      "name": "LegProduct",
      "number": 607,
      "tags": "",
      "enum": {}
    },
    "608": {
      "name": "LegCFICode",
      "number": 608,
      "tags": "",
      "enum": {}
    },
    "609": {
      "name": "LegSecurityType",
      "number": 609,
      "tags": "",
      "enum": {}
    },
    "610": {
      "name": "LegMaturityMonthYear",
      "number": 610,
      "tags": "",
      "enum": {}
    },
    "611": {
      "name": "LegMaturityDate",
      "number": 611,
      "tags": "",
      "enum": {}
    },
    "612": {
      "name": "LegStrikePrice",
      "number": 612,
      "tags": "",
      "enum": {}
    },
    "613": {
      "name": "LegOptAttribute",
      "number": 613,
      "tags": "",
      "enum": {}
    },
    "614": {
      "name": "LegContractMultiplier",
      "number": 614,
      "tags": "",
      "enum": {}
    },
    "615": {
      "name": "LegCouponRate",
      "number": 615,
      "tags": "",
      "enum": {}
    },
    "616": {
      "name": "LegSecurityExchange",
      "number": 616,
      "tags": "",
      "enum": {}
    },
    "617": {
      "name": "LegIssuer",
      "number": 617,
      "tags": "",
      "enum": {}
    },
    "618": {
      "name": "EncodedLegIssuerLen",
      "number": 618,
      "tags": "",
      "enum": {}
    },
    "619": {
      "name": "EncodedLegIssuer",
      "number": 619,
      "tags": "",
      "enum": {}
    },
    "620": {
      "name": "LegSecurityDesc",
      "number": 620,
      "tags": "",
      "enum": {}
    },
    "621": {
      "name": "EncodedLegSecurityDescLen",
      "number": 621,
      "tags": "",
      "enum": {}
    },
    "622": {
      "name": "EncodedLegSecurityDesc",
      "number": 622,
      "tags": "",
      "enum": {}
    },
    "623": {
      "name": "LegRatioQty",
      "number": 623,
      "tags": "",
      "enum": {}
    },
    "624": {
      "name": "LegSide",
      "number": 624,
      "tags": "",
      "enum": {}
    },
    "625": {
      "name": "TradingSessionSubID",
      "number": 625,
      "tags": "",
      "enum": {
        "1": "PRE_TRADING",
        "2": "OPENING_OR_OPENING_AUCTION",
        "3": "TRADING",
        "4": "CLOSING_OR_CLOSING_AUCTION",
        "5": "POST_TRADING",
        "6": "INTRADAY_AUCTION",
        "7": "QUIESCENT"
      }
    },
    "626": {
      "name": "AllocType",
      "number": 626,
      "tags": "",
      "enum": {
        "1": "CALCULATED",
        "2": "PRELIMINARY",
        "3": "SELLSIDE_CALCULATED_USING_PRELIMINARY",
        "4": "SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY",
        "5": "READY_TO_BOOK_SINGLE_ORDER",
        "6": "BUYSIDE_READY_TO_BOOK_COMBINED_SET_OF_ORDERS",
        "7": "WAREHOUSE_INSTRUCTION",
        "8": "REQUEST_TO_INTERMEDIARY",
        "9": "ACCEPT",
        "10": "REJECT",
        "11": "ACCEPT_PENDING",
        "12": "INCOMPLETE_GROUP",
        "13": "COMPLETE_GROUP",
        "14": "REVERSAL_PENDING"
      }
    },
    "627": {
      "name": "NoHops",
      "number": 627,
      "tags": "",
      "enum": {}
    },
    "628": {
      "name": "HopCompID",
      "number": 628,
      "tags": "",
      "enum": {}
    },
    "629": {
      "name": "HopSendingTime",
      "number": 629,
      "tags": "",
      "enum": {}
    },
    "630": {
      "name": "HopRefID",
      "number": 630,
      "tags": "",
      "enum": {}
    },
    "631": {
      "name": "MidPx",
      "number": 631,
      "tags": "",
      "enum": {}
    },
    "632": {
      "name": "BidYield",
      "number": 632,
      "tags": "",
      "enum": {}
    },
    "633": {
      "name": "MidYield",
      "number": 633,
      "tags": "",
      "enum": {}
    },
    "634": {
      "name": "OfferYield",
      "number": 634,
      "tags": "",
      "enum": {}
    },
    "635": {
      "name": "ClearingFeeIndicator",
      "number": 635,
      "tags": "",
      "enum": {
        "1": "_1ST_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT",
        "2": "_2ND_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT",
        "3": "_3RD_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT",
        "4": "_4TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT",
        "5": "_5TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT",
        "9": "_6TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT",
        "B": "CBOE_MEMBER",
        "C": "NON_MEMBER_AND_CUSTOMER",
        "E": "EQUITY_MEMBER_AND_CLEARING_MEMBER",
        "F": "FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS",
        "H": "_106_H_AND_106_J_FIRMS",
        "I": "GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS",
        "L": "LESSEE_106_F_EMPLOYEES",
        "M": "ALL_OTHER_OWNERSHIP_TYPES"
      }
    },
    "636": {
      "name": "WorkingIndicator",
      "number": 636,
      "tags": "",
      "enum": {
        "N": "ORDER_HAS_BEEN_ACCEPTED_BUT_NOT_YET_IN_A_WORKING_STATE",
        "Y": "ORDER_IS_CURRENTLY_BEING_WORKED"
      }
    },
    "637": {
      "name": "LegLastPx",
      "number": 637,
      "tags": "",
      "enum": {}
    },
    "638": {
      "name": "PriorityIndicator",
      "number": 638,
      "tags": "",
      "enum": {
        "0": "PRIORITY_UNCHANGED",
        "1": "LOST_PRIORITY_AS_RESULT_OF_ORDER_CHANGE"
      }
    },
    "639": {
      "name": "PriceImprovement",
      "number": 639,
      "tags": "",
      "enum": {}
    },
    "640": {
      "name": "Price2",
      "number": 640,
      "tags": "",
      "enum": {}
    },
    "641": {
      "name": "LastForwardPoints2",
      "number": 641,
      "tags": "",
      "enum": {}
    },
    "642": {
      "name": "BidForwardPoints2",
      "number": 642,
      "tags": "",
      "enum": {}
    },
    "643": {
      "name": "OfferForwardPoints2",
      "number": 643,
      "tags": "",
      "enum": {}
    },
    "644": {
      "name": "RFQReqID",
      "number": 644,
      "tags": "",
      "enum": {}
    },
    "645": {
      "name": "MktBidPx",
      "number": 645,
      "tags": "",
      "enum": {}
    },
    "646": {
      "name": "MktOfferPx",
      "number": 646,
      "tags": "",
      "enum": {}
    },
    "647": {
      "name": "MinBidSize",
      "number": 647,
      "tags": "",
      "enum": {}
    },
    "648": {
      "name": "MinOfferSize",
      "number": 648,
      "tags": "",
      "enum": {}
    },
    "649": {
      "name": "QuoteStatusReqID",
      "number": 649,
      "tags": "",
      "enum": {}
    },
    "650": {
      "name": "LegalConfirm",
      "number": 650,
      "tags": "",
      "enum": {
        "N": "DOES_NOT_CONSITUTE_A_LEGAL_CONFIRM",
        "Y": "LEGAL_CONFIRM"
      }
    },
    "651": {
      "name": "UnderlyingLastPx",
      "number": 651,
      "tags": "",
      "enum": {}
    },
    "652": {
      "name": "UnderlyingLastQty",
      "number": 652,
      "tags": "",
      "enum": {}
    },
    "653": {
      "name": "SecDefStatus",
      "number": 653,
      "tags": "",
      "enum": {
        "0": "PENDING_APPROVAL",
        "1": "APPROVED",
        "2": "REJECTED",
        "3": "UNAUTHORIZED_REQUEST",
        "4": "INVALID_DEFINITION_REQUEST"
      }
    },
    "654": {
      "name": "LegRefID",
      "number": 654,
      "tags": "",
      "enum": {}
    },
    "655": {
      "name": "ContraLegRefID",
      "number": 655,
      "tags": "",
      "enum": {}
    },
    "656": {
      "name": "SettlCurrBidFxRate",
      "number": 656,
      "tags": "",
      "enum": {}
    },
    "657": {
      "name": "SettlCurrOfferFxRate",
      "number": 657,
      "tags": "",
      "enum": {}
    },
    "658": {
      "name": "QuoteRequestRejectReason",
      "number": 658,
      "tags": "",
      "enum": {
        "1": "UNKNOWN_SYMBOL",
        "2": "EXCHANGE_CLOSED",
        "3": "QUOTE_REQUEST_EXCEEDS_LIMIT",
        "4": "TOO_LATE_TO_ENTER",
        "5": "INVALID_PRICE",
        "6": "NOT_AUTHORIZED_TO_REQUEST_QUOTE",
        "7": "NO_MATCH_FOR_INQUIRY",
        "8": "NO_MARKET_FOR_INSTRUMENT",
        "9": "NO_INVENTORY",
        "10": "PASS",
        "11": "INSUFFICIENT_CREDIT",
        "99": "OTHER"
      }
    },
    "659": {
      "name": "SideComplianceID",
      "number": 659,
      "tags": "",
      "enum": {}
    },
    "660": {
      "name": "AcctIDSource",
      "number": 660,
      "tags": "",
      "enum": {
        "1": "BIC",
        "2": "SID_CODE",
        "3": "TFM",
        "4": "OMGEO",
        "5": "DTCC_CODE",
        "99": "OTHER"
      }
    },
    "661": {
      "name": "AllocAcctIDSource",
      "number": 661,
      "tags": "",
      "enum": {}
    },
    "662": {
      "name": "BenchmarkPrice",
      "number": 662,
      "tags": "",
      "enum": {}
    },
    "663": {
      "name": "BenchmarkPriceType",
      "number": 663,
      "tags": "",
      "enum": {}
    },
    "664": {
      "name": "ConfirmID",
      "number": 664,
      "tags": "",
      "enum": {}
    },
    "665": {
      "name": "ConfirmStatus",
      "number": 665,
      "tags": "",
      "enum": {
        "1": "RECEIVED",
        "2": "MISMATCHED_ACCOUNT",
        "3": "MISSING_SETTLEMENT_INSTRUCTIONS",
        "4": "CONFIRMED",
        "5": "REQUEST_REJECTED"
      }
    },
    "666": {
      "name": "ConfirmTransType",
      "number": 666,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "REPLACE",
        "2": "CANCEL"
      }
    },
    "667": {
      "name": "ContractSettlMonth",
      "number": 667,
      "tags": "",
      "enum": {}
    },
    "668": {
      "name": "DeliveryForm",
      "number": 668,
      "tags": "",
      "enum": {
        "1": "BOOK_ENTRY",
        "2": "BEARER"
      }
    },
    "669": {
      "name": "LastParPx",
      "number": 669,
      "tags": "",
      "enum": {}
    },
    "670": {
      "name": "NoLegAllocs",
      "number": 670,
      "tags": "",
      "enum": {}
    },
    "671": {
      "name": "LegAllocAccount",
      "number": 671,
      "tags": "",
      "enum": {}
    },
    "672": {
      "name": "LegIndividualAllocID",
      "number": 672,
      "tags": "",
      "enum": {}
    },
    "673": {
      "name": "LegAllocQty",
      "number": 673,
      "tags": "",
      "enum": {}
    },
    "674": {
      "name": "LegAllocAcctIDSource",
      "number": 674,
      "tags": "",
      "enum": {}
    },
    "675": {
      "name": "LegSettlCurrency",
      "number": 675,
      "tags": "",
      "enum": {}
    },
    "676": {
      "name": "LegBenchmarkCurveCurrency",
      "number": 676,
      "tags": "",
      "enum": {}
    },
    "677": {
      "name": "LegBenchmarkCurveName",
      "number": 677,
      "tags": "",
      "enum": {}
    },
    "678": {
      "name": "LegBenchmarkCurvePoint",
      "number": 678,
      "tags": "",
      "enum": {}
    },
    "679": {
      "name": "LegBenchmarkPrice",
      "number": 679,
      "tags": "",
      "enum": {}
    },
    "680": {
      "name": "LegBenchmarkPriceType",
      "number": 680,
      "tags": "",
      "enum": {}
    },
    "681": {
      "name": "LegBidPx",
      "number": 681,
      "tags": "",
      "enum": {}
    },
    "682": {
      "name": "LegIOIQty",
      "number": 682,
      "tags": "",
      "enum": {}
    },
    "683": {
      "name": "NoLegStipulations",
      "number": 683,
      "tags": "",
      "enum": {}
    },
    "684": {
      "name": "LegOfferPx",
      "number": 684,
      "tags": "",
      "enum": {}
    },
    "685": {
      "name": "LegOrderQty",
      "number": 685,
      "tags": "",
      "enum": {}
    },
    "686": {
      "name": "LegPriceType",
      "number": 686,
      "tags": "",
      "enum": {}
    },
    "687": {
      "name": "LegQty",
      "number": 687,
      "tags": "",
      "enum": {}
    },
    "688": {
      "name": "LegStipulationType",
      "number": 688,
      "tags": "",
      "enum": {}
    },
    "689": {
      "name": "LegStipulationValue",
      "number": 689,
      "tags": "",
      "enum": {}
    },
    "690": {
      "name": "LegSwapType",
      "number": 690,
      "tags": "",
      "enum": {
        "1": "PAR_FOR_PAR",
        "2": "MODIFIED_DURATION",
        "4": "RISK",
        "5": "PROCEEDS"
      }
    },
    "691": {
      "name": "Pool",
      "number": 691,
      "tags": "",
      "enum": {}
    },
    "692": {
      "name": "QuotePriceType",
      "number": 692,
      "tags": "",
      "enum": {
        "1": "PERCENT",
        "2": "PER_SHARE",
        "3": "FIXED_AMOUNT",
        "4": "DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR",
        "5": "PREMIUM_PERCENTAGE_POINTS_OVER_PAR",
        "6": "SPREAD_BASIS_POINTS_RELATIVE_TO_BENCHMARK",
        "7": "TED_PRICE",
        "8": "TED_YIELD",
        "9": "YIELD_SPREAD",
        "10": "YIELD"
      }
    },
    "693": {
      "name": "QuoteRespID",
      "number": 693,
      "tags": "",
      "enum": {}
    },
    "694": {
      "name": "QuoteRespType",
      "number": 694,
      "tags": "",
      "enum": {
        "1": "HIT_LIFT",
        "2": "COUNTER",
        "3": "EXPIRED",
        "4": "COVER",
        "5": "DONE_AWAY",
        "6": "PASS",
        "7": "END_TRADE",
        "8": "TIMED_OUT"
      }
    },
    "695": {
      "name": "QuoteQualifier",
      "number": 695,
      "tags": "",
      "enum": {}
    },
    "696": {
      "name": "YieldRedemptionDate",
      "number": 696,
      "tags": "",
      "enum": {}
    },
    "697": {
      "name": "YieldRedemptionPrice",
      "number": 697,
      "tags": "",
      "enum": {}
    },
    "698": {
      "name": "YieldRedemptionPriceType",
      "number": 698,
      "tags": "",
      "enum": {}
    },
    "699": {
      "name": "BenchmarkSecurityID",
      "number": 699,
      "tags": "",
      "enum": {}
    },
    "700": {
      "name": "ReversalIndicator",
      "number": 700,
      "tags": "",
      "enum": {}
    },
    "701": {
      "name": "YieldCalcDate",
      "number": 701,
      "tags": "",
      "enum": {}
    },
    "702": {
      "name": "NoPositions",
      "number": 702,
      "tags": "",
      "enum": {}
    },
    "703": {
      "name": "PosType",
      "number": 703,
      "tags": "",
      "enum": {
        "ALC": "ALLOCATION_TRADE_QTY",
        "AS": "OPTION_ASSIGNMENT",
        "ASF": "AS_OF_TRADE_QTY",
        "DLV": "DELIVERY_QTY",
        "ETR": "ELECTRONIC_TRADE_QTY",
        "EX": "OPTION_EXERCISE_QTY",
        "FIN": "END_OF_DAY_QTY",
        "IAS": "INTRA_SPREAD_QTY",
        "IES": "INTER_SPREAD_QTY",
        "PA": "ADJUSTMENT_QTY",
        "PIT": "PIT_TRADE_QTY",
        "SOD": "START_OF_DAY_QTY",
        "SPL": "INTEGRAL_SPLIT",
        "TA": "TRANSACTION_FROM_ASSIGNMENT",
        "TOT": "TOTAL_TRANSACTION_QTY",
        "TQ": "TRANSACTION_QUANTITY",
        "TRF": "TRANSFER_TRADE_QTY",
        "TX": "TRANSACTION_FROM_EXERCISE",
        "XM": "CROSS_MARGIN_QTY",
        "RCV": "RECEIVE_QUANTITY",
        "CAA": "CORPORATE_ACTION_ADJUSTMENT",
        "DN": "DELIVERY_NOTICE_QTY",
        "EP": "EXCHANGE_FOR_PHYSICAL_QTY",
        "PNTN": "PRIVATELY_NEGOTIATED_TRADE_QTY",
        "DLT": "NET_DELTA_QTY",
        "CEA": "CREDIT_EVENT_ADJUSTMENT",
        "SEA": "SUCCESSION_EVENT_ADJUSTMENT"
      }
    },
    "704": {
      "name": "LongQty",
      "number": 704,
      "tags": "",
      "enum": {}
    },
    "705": {
      "name": "ShortQty",
      "number": 705,
      "tags": "",
      "enum": {}
    },
    "706": {
      "name": "PosQtyStatus",
      "number": 706,
      "tags": "",
      "enum": {
        "0": "SUBMITTED",
        "1": "ACCEPTED",
        "2": "REJECTED"
      }
    },
    "707": {
      "name": "PosAmtType",
      "number": 707,
      "tags": "",
      "enum": {
        "CASH": "CASH_AMOUNT",
        "CRES": "CASH_RESIDUAL_AMOUNT",
        "FMTM": "FINAL_MARK_TO_MARKET_AMOUNT",
        "IMTM": "INCREMENTAL_MARK_TO_MARKET_AMOUNT",
        "PREM": "PREMIUM_AMOUNT",
        "SMTM": "START_OF_DAY_MARK_TO_MARKET_AMOUNT",
        "TVAR": "TRADE_VARIATION_AMOUNT",
        "VADJ": "VALUE_ADJUSTED_AMOUNT",
        "SETL": "SETTLEMENT_VALUE",
        "ICPN": "INITIAL_TRADE_COUPON_AMOUNT",
        "ACPN": "ACCRUED_COUPON_AMOUNT",
        "CPN": "COUPON_AMOUNT",
        "IACPN": "INCREMENTAL_ACCRUED_COUPON",
        "CMTM": "COLLATERALIZED_MARK_TO_MARKET",
        "ICMTM": "INCREMENTAL_COLLATERALIZED_MARK_TO_MARKET",
        "DLV": "COMPENSATION_AMOUNT",
        "BANK": "TOTAL_BANKED_AMOUNT",
        "COLAT": "TOTAL_COLLATERALIZED_AMOUNT"
      }
    },
    "708": {
      "name": "PosAmt",
      "number": 708,
      "tags": "",
      "enum": {}
    },
    "709": {
      "name": "PosTransType",
      "number": 709,
      "tags": "",
      "enum": {
        "1": "EXERCISE",
        "2": "DO_NOT_EXERCISE",
        "3": "POSITION_ADJUSTMENT",
        "4": "POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION",
        "5": "PLEDGE",
        "6": "LARGE_TRADER_SUBMISSION"
      }
    },
    "710": {
      "name": "PosReqID",
      "number": 710,
      "tags": "",
      "enum": {}
    },
    "711": {
      "name": "NoUnderlyings",
      "number": 711,
      "tags": "",
      "enum": {}
    },
    "712": {
      "name": "PosMaintAction",
      "number": 712,
      "tags": "",
      "enum": {
        "1": "NEW_USED_TO_INCREMENT_THE_OVERALL_TRANSACTION_QUANTITY",
        "2": "REPLACE_USED_TO_OVERRIDE_THE_OVERALL_TRANSACTION_QUANTITY_OR_SPECIFI_ADD_MESSAGES_BASED_ON_THE_REFERENCE_ID",
        "3": "CANCEL_USED_TO_REMOVE_THE_OVERALL_TRANSACTION_OR_SPECIFIC_ADD_MESSAGES_BASED_ON_REFERENCE_ID",
        "4": "REVERSE_USED_TO_COMPLETELLY_BACK_OUT_THE_TRANSACTION_SUCH_THAT_THE_TRANSACTION_NEVER_EXISTED"
      }
    },
    "713": {
      "name": "OrigPosReqRefID",
      "number": 713,
      "tags": "",
      "enum": {}
    },
    "714": {
      "name": "PosMaintRptRefID",
      "number": 714,
      "tags": "",
      "enum": {}
    },
    "715": {
      "name": "ClearingBusinessDate",
      "number": 715,
      "tags": "",
      "enum": {}
    },
    "716": {
      "name": "SettlSessID",
      "number": 716,
      "tags": "",
      "enum": {
        "ITD": "INTRADAY",
        "RTH": "REGULAR_TRADING_HOURS",
        "ETH": "ELECTRONIC_TRADING_HOURS",
        "EOD": "END_OF_DAY"
      }
    },
    "717": {
      "name": "SettlSessSubID",
      "number": 717,
      "tags": "",
      "enum": {}
    },
    "718": {
      "name": "AdjustmentType",
      "number": 718,
      "tags": "",
      "enum": {
        "0": "PROCESS_REQUEST_AS_MARGIN_DISPOSITION",
        "1": "DELTA_PLUS",
        "2": "DELTA_MINUS",
        "3": "FINAL"
      }
    },
    "719": {
      "name": "ContraryInstructionIndicator",
      "number": 719,
      "tags": "",
      "enum": {}
    },
    "720": {
      "name": "PriorSpreadIndicator",
      "number": 720,
      "tags": "",
      "enum": {}
    },
    "721": {
      "name": "PosMaintRptID",
      "number": 721,
      "tags": "",
      "enum": {}
    },
    "722": {
      "name": "PosMaintStatus",
      "number": 722,
      "tags": "",
      "enum": {
        "0": "ACCEPTED",
        "1": "ACCEPTED_WITH_WARNINGS",
        "2": "REJECTED",
        "3": "COMPLETED",
        "4": "COMPLETED_WITH_WARNINGS"
      }
    },
    "723": {
      "name": "PosMaintResult",
      "number": 723,
      "tags": "",
      "enum": {
        "0": "SUCCESSFUL_COMPLETION_NO_WARNINGS_OR_ERRORS",
        "1": "REJECTED",
        "99": "OTHER"
      }
    },
    "724": {
      "name": "PosReqType",
      "number": 724,
      "tags": "",
      "enum": {
        "0": "POSITIONS",
        "1": "TRADES",
        "2": "EXERCISES",
        "3": "ASSIGNMENTS",
        "4": "SETTLEMENT_ACTIVITY",
        "5": "BACKOUT_MESSAGE",
        "6": "DELTA_POSITIONS"
      }
    },
    "725": {
      "name": "ResponseTransportType",
      "number": 725,
      "tags": "",
      "enum": {
        "0": "INBAND_TRANSPORT_THE_REQUEST_WAS_SENT_OVER",
        "1": "OUT_OF_BAND_PRE_ARRANGED_OUT_OF_BAND_DELIVERY_MECHANIZM_"
      }
    },
    "726": {
      "name": "ResponseDestination",
      "number": 726,
      "tags": "",
      "enum": {}
    },
    "727": {
      "name": "TotalNumPosReports",
      "number": 727,
      "tags": "",
      "enum": {}
    },
    "728": {
      "name": "PosReqResult",
      "number": 728,
      "tags": "",
      "enum": {
        "0": "VALID_REQUEST",
        "1": "INVALID_OR_UNSUPPORTED_REQUEST",
        "2": "NO_POSITIONS_FOUND_THAT_MATCH_CRITERIA",
        "3": "NOT_AUTHORIZED_TO_REQUEST_POSITIONS",
        "4": "REQUEST_FOR_POSITION_NOT_SUPPORTED",
        "99": "OTHER"
      }
    },
    "729": {
      "name": "PosReqStatus",
      "number": 729,
      "tags": "",
      "enum": {
        "0": "COMPLETED",
        "1": "COMPLETED_WITH_WARNINGS",
        "2": "REJECTED"
      }
    },
    "730": {
      "name": "SettlPrice",
      "number": 730,
      "tags": "",
      "enum": {}
    },
    "731": {
      "name": "SettlPriceType",
      "number": 731,
      "tags": "",
      "enum": {
        "1": "FINAL",
        "2": "THEORETICAL"
      }
    },
    "732": {
      "name": "UnderlyingSettlPrice",
      "number": 732,
      "tags": "",
      "enum": {}
    },
    "733": {
      "name": "UnderlyingSettlPriceType",
      "number": 733,
      "tags": "",
      "enum": {}
    },
    "734": {
      "name": "PriorSettlPrice",
      "number": 734,
      "tags": "",
      "enum": {}
    },
    "735": {
      "name": "NoQuoteQualifiers",
      "number": 735,
      "tags": "",
      "enum": {}
    },
    "736": {
      "name": "AllocSettlCurrency",
      "number": 736,
      "tags": "",
      "enum": {}
    },
    "737": {
      "name": "AllocSettlCurrAmt",
      "number": 737,
      "tags": "",
      "enum": {}
    },
    "738": {
      "name": "InterestAtMaturity",
      "number": 738,
      "tags": "",
      "enum": {}
    },
    "739": {
      "name": "LegDatedDate",
      "number": 739,
      "tags": "",
      "enum": {}
    },
    "740": {
      "name": "LegPool",
      "number": 740,
      "tags": "",
      "enum": {}
    },
    "741": {
      "name": "AllocInterestAtMaturity",
      "number": 741,
      "tags": "",
      "enum": {}
    },
    "742": {
      "name": "AllocAccruedInterestAmt",
      "number": 742,
      "tags": "",
      "enum": {}
    },
    "743": {
      "name": "DeliveryDate",
      "number": 743,
      "tags": "",
      "enum": {}
    },
    "744": {
      "name": "AssignmentMethod",
      "number": 744,
      "tags": "",
      "enum": {
        "P": "PRO_RATA",
        "R": "RANDOM"
      }
    },
    "745": {
      "name": "AssignmentUnit",
      "number": 745,
      "tags": "",
      "enum": {}
    },
    "746": {
      "name": "OpenInterest",
      "number": 746,
      "tags": "",
      "enum": {}
    },
    "747": {
      "name": "ExerciseMethod",
      "number": 747,
      "tags": "",
      "enum": {
        "A": "AUTOMATIC",
        "M": "MANUAL"
      }
    },
    "748": {
      "name": "TotNumTradeReports",
      "number": 748,
      "tags": "",
      "enum": {}
    },
    "749": {
      "name": "TradeRequestResult",
      "number": 749,
      "tags": "",
      "enum": {
        "0": "SUCCESSFUL",
        "1": "INVALID_OR_UNKNOWN_INSTRUMENT",
        "2": "INVALID_TYPE_OF_TRADE_REQUESTED",
        "3": "INVALID_PARTIES",
        "4": "INVALID_TRANSPORT_TYPE_REQUESTED",
        "5": "INVALID_DESTINATION_REQUESTED",
        "8": "TRADEREQUESTTYPE_NOT_SUPPORTED",
        "9": "NOT_AUTHORIZED",
        "99": "OTHER"
      }
    },
    "750": {
      "name": "TradeRequestStatus",
      "number": 750,
      "tags": "",
      "enum": {
        "0": "ACCEPTED",
        "1": "COMPLETED",
        "2": "REJECTED"
      }
    },
    "751": {
      "name": "TradeReportRejectReason",
      "number": 751,
      "tags": "",
      "enum": {
        "0": "SUCCESSFUL",
        "1": "INVALID_PARTY_ONFORMATION",
        "2": "UNKNOWN_INSTRUMENT",
        "3": "UNAUTHORIZED_TO_REPORT_TRADES",
        "4": "INVALID_TRADE_TYPE",
        "99": "OTHER"
      }
    },
    "752": {
      "name": "SideMultiLegReportingType",
      "number": 752,
      "tags": "",
      "enum": {
        "1": "SINGLE_SECURITY",
        "2": "INDIVIDUAL_LEG_OF_A_MULTILEG_SECURITY",
        "3": "MULTILEG_SECURITY"
      }
    },
    "753": {
      "name": "NoPosAmt",
      "number": 753,
      "tags": "",
      "enum": {}
    },
    "754": {
      "name": "AutoAcceptIndicator",
      "number": 754,
      "tags": "",
      "enum": {}
    },
    "755": {
      "name": "AllocReportID",
      "number": 755,
      "tags": "",
      "enum": {}
    },
    "756": {
      "name": "NoNested2PartyIDs",
      "number": 756,
      "tags": "",
      "enum": {}
    },
    "757": {
      "name": "Nested2PartyID",
      "number": 757,
      "tags": "",
      "enum": {}
    },
    "758": {
      "name": "Nested2PartyIDSource",
      "number": 758,
      "tags": "",
      "enum": {}
    },
    "759": {
      "name": "Nested2PartyRole",
      "number": 759,
      "tags": "",
      "enum": {}
    },
    "760": {
      "name": "Nested2PartySubID",
      "number": 760,
      "tags": "",
      "enum": {}
    },
    "761": {
      "name": "BenchmarkSecurityIDSource",
      "number": 761,
      "tags": "",
      "enum": {}
    },
    "762": {
      "name": "SecuritySubType",
      "number": 762,
      "tags": "",
      "enum": {}
    },
    "763": {
      "name": "UnderlyingSecuritySubType",
      "number": 763,
      "tags": "",
      "enum": {}
    },
    "764": {
      "name": "LegSecuritySubType",
      "number": 764,
      "tags": "",
      "enum": {}
    },
    "765": {
      "name": "AllowableOneSidednessPct",
      "number": 765,
      "tags": "",
      "enum": {}
    },
    "766": {
      "name": "AllowableOneSidednessValue",
      "number": 766,
      "tags": "",
      "enum": {}
    },
    "767": {
      "name": "AllowableOneSidednessCurr",
      "number": 767,
      "tags": "",
      "enum": {}
    },
    "768": {
      "name": "NoTrdRegTimestamps",
      "number": 768,
      "tags": "",
      "enum": {}
    },
    "769": {
      "name": "TrdRegTimestamp",
      "number": 769,
      "tags": "",
      "enum": {}
    },
    "770": {
      "name": "TrdRegTimestampType",
      "number": 770,
      "tags": "",
      "enum": {
        "1": "EXECUTION_TIME",
        "2": "TIME_IN",
        "3": "TIME_OUT",
        "4": "BROKER_RECEIPT",
        "5": "BROKER_EXECUTION",
        "6": "DESK_RECEIPT",
        "7": "SUBMISSION_TO_CLEARING"
      }
    },
    "771": {
      "name": "TrdRegTimestampOrigin",
      "number": 771,
      "tags": "",
      "enum": {}
    },
    "772": {
      "name": "ConfirmRefID",
      "number": 772,
      "tags": "",
      "enum": {}
    },
    "773": {
      "name": "ConfirmType",
      "number": 773,
      "tags": "",
      "enum": {
        "1": "STATUS",
        "2": "CONFIRMATION",
        "3": "CONFIRMATION_REQUEST_REJECTED"
      }
    },
    "774": {
      "name": "ConfirmRejReason",
      "number": 774,
      "tags": "",
      "enum": {
        "1": "MISMATCHED_ACCOUNT",
        "2": "MISSING_SETTLEMENT_INSTRUCTIONS",
        "99": "OTHER"
      }
    },
    "775": {
      "name": "BookingType",
      "number": 775,
      "tags": "",
      "enum": {
        "0": "REGULAR_BOOKING",
        "1": "CFD",
        "2": "TOTAL_RETURN_SWAP"
      }
    },
    "776": {
      "name": "IndividualAllocRejCode",
      "number": 776,
      "tags": "",
      "enum": {}
    },
    "777": {
      "name": "SettlInstMsgID",
      "number": 777,
      "tags": "",
      "enum": {}
    },
    "778": {
      "name": "NoSettlInst",
      "number": 778,
      "tags": "",
      "enum": {}
    },
    "779": {
      "name": "LastUpdateTime",
      "number": 779,
      "tags": "",
      "enum": {}
    },
    "780": {
      "name": "AllocSettlInstType",
      "number": 780,
      "tags": "",
      "enum": {
        "0": "USE_DEFAULT_INSTRUCTIONS",
        "1": "DERIVE_FROM_PARAMETERS_PROVIDED",
        "2": "FULL_DETAILS_PROVIDED",
        "3": "SSI_DB_IDS_PROVIDED",
        "4": "PHONE_FOR_INSTRUCTIONS"
      }
    },
    "781": {
      "name": "NoSettlPartyIDs",
      "number": 781,
      "tags": "",
      "enum": {}
    },
    "782": {
      "name": "SettlPartyID",
      "number": 782,
      "tags": "",
      "enum": {}
    },
    "783": {
      "name": "SettlPartyIDSource",
      "number": 783,
      "tags": "",
      "enum": {}
    },
    "784": {
      "name": "SettlPartyRole",
      "number": 784,
      "tags": "",
      "enum": {}
    },
    "785": {
      "name": "SettlPartySubID",
      "number": 785,
      "tags": "",
      "enum": {}
    },
    "786": {
      "name": "SettlPartySubIDType",
      "number": 786,
      "tags": "",
      "enum": {}
    },
    "787": {
      "name": "DlvyInstType",
      "number": 787,
      "tags": "",
      "enum": {
        "C": "CASH",
        "S": "SECURITIES"
      }
    },
    "788": {
      "name": "TerminationType",
      "number": 788,
      "tags": "",
      "enum": {
        "1": "OVERNIGHT",
        "2": "TERM",
        "3": "FLEXIBLE",
        "4": "OPEN"
      }
    },
    "789": {
      "name": "NextExpectedMsgSeqNum",
      "number": 789,
      "tags": "",
      "enum": {}
    },
    "790": {
      "name": "OrdStatusReqID",
      "number": 790,
      "tags": "",
      "enum": {}
    },
    "791": {
      "name": "SettlInstReqID",
      "number": 791,
      "tags": "",
      "enum": {}
    },
    "792": {
      "name": "SettlInstReqRejCode",
      "number": 792,
      "tags": "",
      "enum": {
        "0": "UNABLE_TO_PROCESS_REQUEST",
        "1": "UNKNOWN_ACCOUNT",
        "2": "NO_MATCHING_SETTLEMENT_INSTRUCTIONS_FOUND",
        "99": "OTHER"
      }
    },
    "793": {
      "name": "SecondaryAllocID",
      "number": 793,
      "tags": "",
      "enum": {}
    },
    "794": {
      "name": "AllocReportType",
      "number": 794,
      "tags": "",
      "enum": {
        "2": "PRELIMINARY_REQUEST_TO_INTERMEDIARY",
        "3": "SELLSIDE_CALCULATED_USING_PRELIMINARY",
        "4": "SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY",
        "5": "WAREHOUSE_RECAP",
        "8": "REQUEST_TO_INTERMEDIARY",
        "9": "ACCEPT",
        "10": "REJECT",
        "11": "ACCEPT_PENDING",
        "12": "COMPLETE",
        "14": "REVERSE_PENDING"
      }
    },
    "795": {
      "name": "AllocReportRefID",
      "number": 795,
      "tags": "",
      "enum": {}
    },
    "796": {
      "name": "AllocCancReplaceReason",
      "number": 796,
      "tags": "",
      "enum": {
        "1": "ORIGINAL_DETAILS_INCOMPLETE_INCORRECT",
        "2": "CHANGE_IN_UNDERLYING_ORDER_DETAILS",
        "99": "OTHER"
      }
    },
    "797": {
      "name": "CopyMsgIndicator",
      "number": 797,
      "tags": "",
      "enum": {}
    },
    "798": {
      "name": "AllocAccountType",
      "number": 798,
      "tags": "",
      "enum": {
        "1": "ACCOUNT_IS_CARRIED_PN_CUSTOMER_SIDE_OF_BOOKS",
        "2": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS",
        "3": "HOUSE_TRADER",
        "4": "FLOOR_TRADER",
        "6": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED",
        "7": "ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED",
        "8": "JOINT_BACK_OFFICE_ACCOUNT"
      }
    },
    "799": {
      "name": "OrderAvgPx",
      "number": 799,
      "tags": "",
      "enum": {}
    },
    "800": {
      "name": "OrderBookingQty",
      "number": 800,
      "tags": "",
      "enum": {}
    },
    "801": {
      "name": "NoSettlPartySubIDs",
      "number": 801,
      "tags": "",
      "enum": {}
    },
    "802": {
      "name": "NoPartySubIDs",
      "number": 802,
      "tags": "",
      "enum": {}
    },
    "803": {
      "name": "PartySubIDType",
      "number": 803,
      "tags": "",
      "enum": {
        "1": "FIRM",
        "2": "PERSON",
        "3": "SYSTEM",
        "4": "APPLICATION",
        "5": "FULL_LEGAL_NAME_OF_FIRM",
        "6": "POSTAL_ADDRESS",
        "7": "PHONE_NUMBER",
        "8": "EMAIL_ADDRESS",
        "9": "CONTACT_NAME",
        "10": "SECURITIES_ACCOUNT_NUMBER",
        "11": "REGISTRATION_NUMBER",
        "12": "REGISTERED_ADDRESS",
        "13": "REGULATORY_STATUS",
        "14": "REGISTRATION_NAME",
        "15": "CASH_ACCOUNT_NUMBER",
        "16": "BIC",
        "17": "CSD_PARTICIPANT_MEMBER_CODE",
        "18": "REGISTERED_ADDRESS_1",
        "19": "FUND_ACCOUNT_NAME",
        "20": "TELEX_NUMBER",
        "21": "FAX_NUMBER",
        "22": "SECURITIES_ACCOUNT_NAME",
        "23": "CASH_ACCOUNT_NAME",
        "24": "DEPARTMENT",
        "25": "LOCATION_DESK",
        "26": "POSITION_ACCOUNT_TYPE",
        "27": "SECURITY_LOCATE_ID",
        "28": "MARKET_MAKER",
        "29": "ELIGIBLE_COUNTERPARTY",
        "30": "PROFESSIONAL_CLIENT",
        "31": "LOCATION",
        "32": "EXECUTION_VENUE",
        "33": "CURRENCY_DELIVERY_IDENTIFIER"
      }
    },
    "804": {
      "name": "NoNestedPartySubIDs",
      "number": 804,
      "tags": "",
      "enum": {}
    },
    "805": {
      "name": "NestedPartySubIDType",
      "number": 805,
      "tags": "",
      "enum": {}
    },
    "806": {
      "name": "NoNested2PartySubIDs",
      "number": 806,
      "tags": "",
      "enum": {}
    },
    "807": {
      "name": "Nested2PartySubIDType",
      "number": 807,
      "tags": "",
      "enum": {}
    },
    "808": {
      "name": "AllocIntermedReqType",
      "number": 808,
      "tags": "",
      "enum": {
        "1": "PENDING_ACCEPT",
        "2": "PENDING_RELEASE",
        "3": "PENDING_REVERSAL",
        "4": "ACCEPT",
        "5": "BLOCK_LEVEL_REJECT",
        "6": "ACCOUNT_LEVEL_REJECT"
      }
    },
    "809": {
      "name": "NoUsernames",
      "number": 809,
      "tags": "",
      "enum": {}
    },
    "810": {
      "name": "UnderlyingPx",
      "number": 810,
      "tags": "",
      "enum": {}
    },
    "811": {
      "name": "PriceDelta",
      "number": 811,
      "tags": "",
      "enum": {}
    },
    "812": {
      "name": "ApplQueueMax",
      "number": 812,
      "tags": "",
      "enum": {}
    },
    "813": {
      "name": "ApplQueueDepth",
      "number": 813,
      "tags": "",
      "enum": {}
    },
    "814": {
      "name": "ApplQueueResolution",
      "number": 814,
      "tags": "",
      "enum": {
        "0": "NO_ACTION_TAKEN",
        "1": "QUEUE_FLUSHED",
        "2": "OVERLAY_LAST",
        "3": "END_SESSION"
      }
    },
    "815": {
      "name": "ApplQueueAction",
      "number": 815,
      "tags": "",
      "enum": {
        "0": "NO_ACTION_TAKEN",
        "1": "QUEUE_FLUSHED",
        "2": "OVERLAY_LAST",
        "3": "END_SESSION"
      }
    },
    "816": {
      "name": "NoAltMDSource",
      "number": 816,
      "tags": "",
      "enum": {}
    },
    "817": {
      "name": "AltMDSourceID",
      "number": 817,
      "tags": "",
      "enum": {}
    },
    "818": {
      "name": "SecondaryTradeReportID",
      "number": 818,
      "tags": "",
      "enum": {}
    },
    "819": {
      "name": "AvgPxIndicator",
      "number": 819,
      "tags": "",
      "enum": {
        "0": "NO_AVERAGE_PRICING",
        "1": "TRADE_IS_PART_OF_AN_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID",
        "2": "LAST_TRADE_IS_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID"
      }
    },
    "820": {
      "name": "TradeLinkID",
      "number": 820,
      "tags": "",
      "enum": {}
    },
    "821": {
      "name": "OrderInputDevice",
      "number": 821,
      "tags": "",
      "enum": {}
    },
    "822": {
      "name": "UnderlyingTradingSessionID",
      "number": 822,
      "tags": "",
      "enum": {}
    },
    "823": {
      "name": "UnderlyingTradingSessionSubID",
      "number": 823,
      "tags": "",
      "enum": {}
    },
    "824": {
      "name": "TradeLegRefID",
      "number": 824,
      "tags": "",
      "enum": {}
    },
    "825": {
      "name": "ExchangeRule",
      "number": 825,
      "tags": "",
      "enum": {}
    },
    "826": {
      "name": "TradeAllocIndicator",
      "number": 826,
      "tags": "",
      "enum": {
        "0": "ALLOCATION_NOT_REQUIRED",
        "1": "ALLOCATION_REQUIRED",
        "2": "USE_ALLOCATION_PROVIDED_WITH_THE_TRADE",
        "3": "ALLOCATION_GIVE_UP_EXECUTOR",
        "4": "ALLOCATION_FROM_EXECUTOR",
        "5": "ALLOCATION_TO_CLAIM_ACCOUNT"
      }
    },
    "827": {
      "name": "ExpirationCycle",
      "number": 827,
      "tags": "",
      "enum": {
        "0": "EXPIRE_ON_TRADING_SESSION_CLOSE",
        "1": "EXPIRE_ON_TRADING_SESSION_OPEN",
        "2": "TRADING_ELIGIBILITY_EXPIRATION_SPECIFIED_IN_THE_DATE_AND_TIME_FIELDS_EVENTDATE"
      }
    },
    "828": {
      "name": "TrdType",
      "number": 828,
      "tags": "",
      "enum": {
        "0": "REGULAR_TRADE",
        "1": "BLOCK_TRADE",
        "2": "EFP",
        "3": "TRANSFER",
        "4": "LATE_TRADE",
        "5": "T_TRADE",
        "6": "WEIGHTED_AVERAGE_PRICE_TRADE",
        "7": "BUNCHED_TRADE",
        "8": "LATE_BUNCHED_TRADE",
        "9": "PRIOR_REFERENCE_PRICE_TRADE",
        "10": "AFTER_HOURS_TRADE",
        "11": "EXCHANGE_FOR_RISK",
        "12": "EXCHANGE_FOR_SWAP",
        "13": "EXCHANGE_OF_FUTURES_FOR",
        "14": "EXCHANGE_OF_OPTIONS_FOR_OPTIONS",
        "15": "TRADING_AT_SETTLEMENT",
        "16": "ALL_OR_NONE",
        "17": "FUTURES_LARGE_ORDER_EXECUTION",
        "18": "EXCHANGE_OF_FUTURES_FOR_FUTURES",
        "19": "OPTION_INTERIM_TRADE",
        "20": "OPTION_CABINET_TRADE",
        "22": "PRIVATELY_NEGOTIATED_TRADES",
        "23": "SUBSTITUTION_OF_FUTURES_FOR_FORWARDS",
        "24": "ERROR_TRADE",
        "25": "SPECIAL_CUM_DIVIDEND",
        "26": "SPECIAL_EX_DIVIDEND",
        "27": "SPECIAL_CUM_COUPON",
        "28": "SPECIAL_EX_COUPON",
        "29": "CASH_SETTLEMENT",
        "30": "SPECIAL_PRICE",
        "31": "GUARANTEED_DELIVERY",
        "32": "SPECIAL_CUM_RIGHTS",
        "33": "SPECIAL_EX_RIGHTS",
        "34": "SPECIAL_CUM_CAPITAL_REPAYMENTS",
        "35": "SPECIAL_EX_CAPITAL_REPAYMENTS",
        "36": "SPECIAL_CUM_BONUS",
        "37": "SPECIAL_EX_BONUS",
        "38": "BLOCK_TRADE_1",
        "39": "WORKED_PRINCIPAL_TRADE",
        "40": "BLOCK_TRADES_AFTER_MARKET",
        "41": "NAME_CHANGE",
        "42": "PORTFOLIO_TRANSFER",
        "43": "PROROGATION_BUY_EURONEXT_PARIS_ONLY_IS_USED_TO_DEFER_SETTLEMENT_UNDER_FRENCH_SRD_TRADES_MUST_BE_REPORTED_AS_CROSSES_AT_ZERO_PRICE",
        "44": "PROROGATION_SELL_SEE_PROROGATION_BUY",
        "45": "OPTION_EXERCISE",
        "46": "DELTA_NEUTRAL_TRANSACTION",
        "47": "FINANCING_TRANSACTION",
        "48": "NON_STANDARD_SETTLEMENT",
        "49": "DERIVATIVE_RELATED_TRANSACTION",
        "50": "PORTFOLIO_TRADE",
        "51": "VOLUME_WEIGHTED_AVERAGE_TRADE",
        "52": "EXCHANGE_GRANTED_TRADE",
        "53": "REPURCHASE_AGREEMENT",
        "54": "OTC",
        "55": "EXCHANGE_BASIS_FACILITY"
      }
    },
    "829": {
      "name": "TrdSubType",
      "number": 829,
      "tags": "",
      "enum": {
        "0": "CMTA",
        "1": "INTERNAL_TRANSFER_OR_ADJUSTMENT",
        "2": "EXTERNAL_TRANSFER_OR_TRANSFER_OF_ACCOUNT",
        "3": "REJECT_FOR_SUBMITTING_SIDE",
        "4": "ADVISORY_FOR_CONTRA_SIDE",
        "5": "OFFSET_DUE_TO_AN_ALLOCATION",
        "6": "ONSET_DUE_TO_AN_ALLOCATION",
        "7": "DIFFERENTIAL_SPREAD",
        "8": "IMPLIED_SPREAD_LEG_EXECUTED_AGAINST_AN_OUTRIGHT",
        "9": "TRANSACTION_FROM_EXERCISE",
        "10": "TRANSACTION_FROM_ASSIGNMENT",
        "11": "ACATS",
        "14": "AI",
        "15": "B",
        "16": "K",
        "17": "LC",
        "18": "M",
        "19": "N",
        "20": "NM_TRANSACTION_WHERE_EXCHANGE_HAS_GRANTED_PERMISSION_FOR_NON_PUBLICATION_II_IDB_IS_REPORTING_AS_SELLER_III_SUBMITTING_A_TRANSACTION_REPORT_TO_THE_EXCHANGE_WHERE_THE_TRANSACTION_REPORT_IS_NOT_ALSO_A_TRADE_REPORT_",
        "21": "NR",
        "22": "P",
        "23": "PA",
        "24": "PC",
        "25": "PN",
        "26": "R_OR",
        "27": "RO",
        "28": "RT",
        "29": "SW",
        "30": "T",
        "31": "WN",
        "32": "WT",
        "33": "OFF_HOURS_TRADE",
        "34": "ON_HOURS_TRADE",
        "35": "OTC_QUOTE",
        "36": "CONVERTED_SWAP",
        "37": "CROSSED_TRADE",
        "38": "INTERIM_PROTECTED_TRADE",
        "39": "LARGE_IN_SCALE"
      }
    },
    "830": {
      "name": "TransferReason",
      "number": 830,
      "tags": "",
      "enum": {}
    },
    "831": {
      "name": "AsgnReqID",
      "number": 831,
      "tags": "",
      "enum": {}
    },
    "832": {
      "name": "TotNumAssignmentReports",
      "number": 832,
      "tags": "",
      "enum": {}
    },
    "833": {
      "name": "AsgnRptID",
      "number": 833,
      "tags": "",
      "enum": {}
    },
    "834": {
      "name": "ThresholdAmount",
      "number": 834,
      "tags": "",
      "enum": {}
    },
    "835": {
      "name": "PegMoveType",
      "number": 835,
      "tags": "",
      "enum": {
        "0": "FLOATING",
        "1": "FIXED"
      }
    },
    "836": {
      "name": "PegOffsetType",
      "number": 836,
      "tags": "",
      "enum": {
        "0": "PRICE",
        "1": "BASIS_POINTS",
        "2": "TICKS",
        "3": "PRICE_TIER_LEVEL"
      }
    },
    "837": {
      "name": "PegLimitType",
      "number": 837,
      "tags": "",
      "enum": {
        "0": "OR_BETTER_PRICE_IMPROVEMENT_ALLOWED",
        "1": "STRICT_LIMIT_IS_A_STRICT_LIMIT",
        "2": "OR_WORSE_FOR_A_BUY_THE_PEG_LIMIT_IS_A_MINIMUM_AND_FOR_A_SELL_THE_PEG_LIMIT_IS_A_MAXIMUM"
      }
    },
    "838": {
      "name": "PegRoundDirection",
      "number": 838,
      "tags": "",
      "enum": {
        "1": "MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_DOWN_TO_THE_NEAREST_TICK",
        "2": "MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_THE_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_THE_NEAREST_TICK"
      }
    },
    "839": {
      "name": "PeggedPrice",
      "number": 839,
      "tags": "",
      "enum": {}
    },
    "840": {
      "name": "PegScope",
      "number": 840,
      "tags": "",
      "enum": {
        "1": "LOCAL",
        "2": "NATIONAL",
        "3": "GLOBAL",
        "4": "NATIONAL_EXCLUDING_LOCAL"
      }
    },
    "841": {
      "name": "DiscretionMoveType",
      "number": 841,
      "tags": "",
      "enum": {
        "0": "FLOATING",
        "1": "FIXED"
      }
    },
    "842": {
      "name": "DiscretionOffsetType",
      "number": 842,
      "tags": "",
      "enum": {
        "0": "PRICE",
        "1": "BASIS_POINTS",
        "2": "TICKS",
        "3": "PRICE_TIER_LEVEL"
      }
    },
    "843": {
      "name": "DiscretionLimitType",
      "number": 843,
      "tags": "",
      "enum": {
        "0": "OR_BETTER_PRICE_IMPROVEMENT_ALLOWED",
        "1": "STRICT_LIMIT_IS_A_STRICT_LIMIT",
        "2": "OR_WORSE_FOR_A_BUY_THE_DISCRETION_PRICE_IS_A_MINIMUM_AND_FOR_A_SELL_THE_DISCRETION_PRICE_IS_A_MAXIMUM"
      }
    },
    "844": {
      "name": "DiscretionRoundDirection",
      "number": 844,
      "tags": "",
      "enum": {
        "1": "MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ROUND_DOWN_TO_THE_NEAREST_TICK",
        "2": "MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_THE_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_THE_NEAREST_TICK"
      }
    },
    "845": {
      "name": "DiscretionPrice",
      "number": 845,
      "tags": "",
      "enum": {}
    },
    "846": {
      "name": "DiscretionScope",
      "number": 846,
      "tags": "",
      "enum": {
        "1": "LOCAL",
        "2": "NATIONAL",
        "3": "GLOBAL",
        "4": "NATIONAL_EXCLUDING_LOCAL"
      }
    },
    "847": {
      "name": "TargetStrategy",
      "number": 847,
      "tags": "",
      "enum": {
        "1": "VWAP",
        "2": "PARTICIPATE",
        "3": "MININIZE_MARKET_IMPACT"
      }
    },
    "848": {
      "name": "TargetStrategyParameters",
      "number": 848,
      "tags": "",
      "enum": {}
    },
    "849": {
      "name": "ParticipationRate",
      "number": 849,
      "tags": "",
      "enum": {}
    },
    "850": {
      "name": "TargetStrategyPerformance",
      "number": 850,
      "tags": "",
      "enum": {}
    },
    "851": {
      "name": "LastLiquidityInd",
      "number": 851,
      "tags": "",
      "enum": {
        "1": "ADDED_LIQUIDITY",
        "2": "REMOVED_LIQUIDITY",
        "3": "LIQUIDITY_ROUTED_OUT",
        "4": "AUCTION"
      }
    },
    "852": {
      "name": "PublishTrdIndicator",
      "number": 852,
      "tags": "",
      "enum": {
        "N": "DO_NOT_REPORT_TRADE",
        "Y": "REPORT_TRADE"
      }
    },
    "853": {
      "name": "ShortSaleReason",
      "number": 853,
      "tags": "",
      "enum": {
        "0": "DEALER_SOLD_SHORT",
        "1": "DEALER_SOLD_SHORT_EXEMPT",
        "2": "SELLING_CUSTOMER_SOLD_SHORT",
        "3": "SELLING_CUSTOMER_SOLD_SHORT_EXEMPT",
        "4": "QUALIFIED_SERVICE_REPRESENTATIVE_CONTRA_SIDE_SOLD_SHORT",
        "5": "QSR_OR_AGU_CONTRA_SIDE_SOLD_SHORT_EXEMPT"
      }
    },
    "854": {
      "name": "QtyType",
      "number": 854,
      "tags": "",
      "enum": {
        "0": "UNITS",
        "1": "CONTRACTS",
        "2": "UNITS_OF_MEASURE_PER_TIME_UNIT"
      }
    },
    "855": {
      "name": "SecondaryTrdType",
      "number": 855,
      "tags": "",
      "enum": {}
    },
    "856": {
      "name": "TradeReportType",
      "number": 856,
      "tags": "",
      "enum": {
        "0": "SUBMIT",
        "1": "ALLEGED",
        "2": "ACCEPT",
        "3": "DECLINE",
        "4": "ADDENDUM",
        "5": "NO_WAS",
        "6": "TRADE_REPORT_CANCEL",
        "7": "TRADE_BREAK",
        "8": "DEFAULTED",
        "9": "INVALID_CMTA",
        "10": "PENDED",
        "11": "ALLEGED_NEW",
        "12": "ALLEGED_ADDENDUM",
        "13": "ALLEGED_NO_WAS",
        "14": "ALLEGED_TRADE_REPORT_CANCEL",
        "15": "ALLEGED_TRADE_BREAK"
      }
    },
    "857": {
      "name": "AllocNoOrdersType",
      "number": 857,
      "tags": "",
      "enum": {
        "0": "NOT_SPECIFIED",
        "1": "EXPLICIT_LIST_PROVIDED"
      }
    },
    "858": {
      "name": "SharedCommission",
      "number": 858,
      "tags": "",
      "enum": {}
    },
    "859": {
      "name": "ConfirmReqID",
      "number": 859,
      "tags": "",
      "enum": {}
    },
    "860": {
      "name": "AvgParPx",
      "number": 860,
      "tags": "",
      "enum": {}
    },
    "861": {
      "name": "ReportedPx",
      "number": 861,
      "tags": "",
      "enum": {}
    },
    "862": {
      "name": "NoCapacities",
      "number": 862,
      "tags": "",
      "enum": {}
    },
    "863": {
      "name": "OrderCapacityQty",
      "number": 863,
      "tags": "",
      "enum": {}
    },
    "864": {
      "name": "NoEvents",
      "number": 864,
      "tags": "",
      "enum": {}
    },
    "865": {
      "name": "EventType",
      "number": 865,
      "tags": "",
      "enum": {
        "1": "PUT",
        "2": "CALL",
        "3": "TENDER",
        "4": "SINKING_FUND_CALL",
        "5": "ACTIVATION",
        "6": "INACTIVIATION",
        "7": "LAST_ELIGIBLE_TRADE_DATE",
        "8": "SWAP_START_DATE",
        "9": "SWAP_END_DATE",
        "10": "SWAP_ROLL_DATE",
        "11": "SWAP_NEXT_START_DATE",
        "12": "SWAP_NEXT_ROLL_DATE",
        "13": "FIRST_DELIVERY_DATE",
        "14": "LAST_DELIVERY_DATE",
        "15": "INITIAL_INVENTORY_DUE_DATE",
        "16": "FINAL_INVENTORY_DUE_DATE",
        "17": "FIRST_INTENT_DATE",
        "18": "LAST_INTENT_DATE",
        "19": "POSITION_REMOVAL_DATE",
        "99": "OTHER"
      }
    },
    "866": {
      "name": "EventDate",
      "number": 866,
      "tags": "",
      "enum": {}
    },
    "867": {
      "name": "EventPx",
      "number": 867,
      "tags": "",
      "enum": {}
    },
    "868": {
      "name": "EventText",
      "number": 868,
      "tags": "",
      "enum": {}
    },
    "869": {
      "name": "PctAtRisk",
      "number": 869,
      "tags": "",
      "enum": {}
    },
    "870": {
      "name": "NoInstrAttrib",
      "number": 870,
      "tags": "",
      "enum": {}
    },
    "871": {
      "name": "InstrAttribType",
      "number": 871,
      "tags": "",
      "enum": {
        "1": "FLAT",
        "2": "ZERO_COUPON",
        "3": "INTEREST_BEARING",
        "4": "NO_PERIODIC_PAYMENTS",
        "5": "VARIABLE_RATE",
        "6": "LESS_FEE_FOR_PUT",
        "7": "STEPPED_COUPON",
        "8": "COUPON_PERIOD_FIELD_",
        "9": "WHEN_AND_IF_ISSUED",
        "10": "ORIGINAL_ISSUE_DISCOUNT",
        "11": "CALLABLE_PUTTABLE",
        "12": "ESCROWED_TO_MATURITY",
        "13": "ESCROWED_TO_REDEMPTION_DATE_CALLABLE_SUPPLY_REDEMPTION_DATE_IN_THE_INSTRATTRIBVALUE_FIELD",
        "14": "PRE_REFUNDED",
        "15": "IN_DEFAULT",
        "16": "UNRATED",
        "17": "TAXABLE",
        "18": "INDEXED",
        "19": "SUBJECT_TO_ALTERNATIVE_MINIMUM_TAX",
        "20": "ORIGINAL_ISSUE_DISCOUNT_PRICE_SUPPLY_PRICE_IN_THE_INSTRATTRIBVALUE_FIELD",
        "21": "CALLABLE_BELOW_MATURITY_VALUE",
        "22": "CALLABLE_WITHOUT_NOTICE_BY_MAIL_TO_HOLDER_UNLESS_REGISTERED",
        "23": "PRICE_TICK_RULES_FOR_SECURITY_",
        "24": "TRADE_TYPE_ELIGIBILITY_DETAILS_FOR_SECURITY_",
        "25": "INSTRUMENT_DENOMINATOR",
        "26": "INSTRUMENT_NUMERATOR",
        "27": "INSTRUMENT_PRICE_PRECISION",
        "28": "INSTRUMENT_STRIKE_PRICE",
        "29": "TRADEABLE_INDICATOR",
        "99": "TEXT_SUPPLY_THE_TEXT_OF_THE_ATTRIBUTE_OR_DISCLAIMER_IN_THE_INSTRATTRIBVALUE_FIELD_"
      }
    },
    "872": {
      "name": "InstrAttribValue",
      "number": 872,
      "tags": "",
      "enum": {}
    },
    "873": {
      "name": "DatedDate",
      "number": 873,
      "tags": "",
      "enum": {}
    },
    "874": {
      "name": "InterestAccrualDate",
      "number": 874,
      "tags": "",
      "enum": {}
    },
    "875": {
      "name": "CPProgram",
      "number": 875,
      "tags": "",
      "enum": {
        "1": "_3",
        "2": "_4",
        "99": "OTHER"
      }
    },
    "876": {
      "name": "CPRegType",
      "number": 876,
      "tags": "",
      "enum": {}
    },
    "877": {
      "name": "UnderlyingCPProgram",
      "number": 877,
      "tags": "",
      "enum": {}
    },
    "878": {
      "name": "UnderlyingCPRegType",
      "number": 878,
      "tags": "",
      "enum": {}
    },
    "879": {
      "name": "UnderlyingQty",
      "number": 879,
      "tags": "",
      "enum": {}
    },
    "880": {
      "name": "TrdMatchID",
      "number": 880,
      "tags": "",
      "enum": {}
    },
    "881": {
      "name": "SecondaryTradeReportRefID",
      "number": 881,
      "tags": "",
      "enum": {}
    },
    "882": {
      "name": "UnderlyingDirtyPrice",
      "number": 882,
      "tags": "",
      "enum": {}
    },
    "883": {
      "name": "UnderlyingEndPrice",
      "number": 883,
      "tags": "",
      "enum": {}
    },
    "884": {
      "name": "UnderlyingStartValue",
      "number": 884,
      "tags": "",
      "enum": {}
    },
    "885": {
      "name": "UnderlyingCurrentValue",
      "number": 885,
      "tags": "",
      "enum": {}
    },
    "886": {
      "name": "UnderlyingEndValue",
      "number": 886,
      "tags": "",
      "enum": {}
    },
    "887": {
      "name": "NoUnderlyingStips",
      "number": 887,
      "tags": "",
      "enum": {}
    },
    "888": {
      "name": "UnderlyingStipType",
      "number": 888,
      "tags": "",
      "enum": {}
    },
    "889": {
      "name": "UnderlyingStipValue",
      "number": 889,
      "tags": "",
      "enum": {}
    },
    "890": {
      "name": "MaturityNetMoney",
      "number": 890,
      "tags": "",
      "enum": {}
    },
    "891": {
      "name": "MiscFeeBasis",
      "number": 891,
      "tags": "",
      "enum": {
        "0": "ABSOLUTE",
        "1": "PER_UNIT",
        "2": "PERCENTAGE"
      }
    },
    "892": {
      "name": "TotNoAllocs",
      "number": 892,
      "tags": "",
      "enum": {}
    },
    "893": {
      "name": "LastFragment",
      "number": 893,
      "tags": "",
      "enum": {
        "N": "NOT_LAST_MESSAGE",
        "Y": "LAST_MESSAGE"
      }
    },
    "894": {
      "name": "CollReqID",
      "number": 894,
      "tags": "",
      "enum": {}
    },
    "895": {
      "name": "CollAsgnReason",
      "number": 895,
      "tags": "",
      "enum": {
        "0": "INITIAL",
        "1": "SCHEDULED",
        "2": "TIME_WARNING",
        "3": "MARGIN_DEFICIENCY",
        "4": "MARGIN_EXCESS",
        "5": "FORWARD_COLLATERAL_DEMAND",
        "6": "EVENT_OF_DEFAULT",
        "7": "ADVERSE_TAX_EVENT"
      }
    },
    "896": {
      "name": "CollInquiryQualifier",
      "number": 896,
      "tags": "",
      "enum": {
        "0": "TRADE_DATE",
        "1": "GC_INSTRUMENT",
        "2": "COLLATERAL_INSTRUMENT",
        "3": "SUBSTITUTION_ELIGIBLE",
        "4": "NOT_ASSIGNED",
        "5": "PARTIALLY_ASSIGNED",
        "6": "FULLY_ASSIGNED",
        "7": "OUTSTANDING_TRADES"
      }
    },
    "897": {
      "name": "NoTrades",
      "number": 897,
      "tags": "",
      "enum": {}
    },
    "898": {
      "name": "MarginRatio",
      "number": 898,
      "tags": "",
      "enum": {}
    },
    "899": {
      "name": "MarginExcess",
      "number": 899,
      "tags": "",
      "enum": {}
    },
    "900": {
      "name": "TotalNetValue",
      "number": 900,
      "tags": "",
      "enum": {}
    },
    "901": {
      "name": "CashOutstanding",
      "number": 901,
      "tags": "",
      "enum": {}
    },
    "902": {
      "name": "CollAsgnID",
      "number": 902,
      "tags": "",
      "enum": {}
    },
    "903": {
      "name": "CollAsgnTransType",
      "number": 903,
      "tags": "",
      "enum": {
        "0": "NEW",
        "1": "REPLACE",
        "2": "CANCEL",
        "3": "RELEASE",
        "4": "REVERSE"
      }
    },
    "904": {
      "name": "CollRespID",
      "number": 904,
      "tags": "",
      "enum": {}
    },
    "905": {
      "name": "CollAsgnRespType",
      "number": 905,
      "tags": "",
      "enum": {
        "0": "RECEIVED",
        "1": "ACCEPTED",
        "2": "DECLINED",
        "3": "REJECTED"
      }
    },
    "906": {
      "name": "CollAsgnRejectReason",
      "number": 906,
      "tags": "",
      "enum": {
        "0": "UNKNOWN_DEAL",
        "1": "UNKNOWN_OR_INVALID_INSTRUMENT",
        "2": "UNAUTHORIZED_TRANSACTION",
        "3": "INSUFFICIENT_COLLATERAL",
        "4": "INVALID_TYPE_OF_COLLATERAL",
        "5": "EXCESSIVE_SUBSTITUTION",
        "99": "OTHER"
      }
    },
    "907": {
      "name": "CollAsgnRefID",
      "number": 907,
      "tags": "",
      "enum": {}
    },
    "908": {
      "name": "CollRptID",
      "number": 908,
      "tags": "",
      "enum": {}
    },
    "909": {
      "name": "CollInquiryID",
      "number": 909,
      "tags": "",
      "enum": {}
    },
    "910": {
      "name": "CollStatus",
      "number": 910,
      "tags": "",
      "enum": {
        "0": "UNASSIGNED",
        "1": "PARTIALLY_ASSIGNED",
        "2": "ASSIGNMENT_PROPOSED",
        "3": "ASSIGNED",
        "4": "CHALLENGED"
      }
    },
    "911": {
      "name": "TotNumReports",
      "number": 911,
      "tags": "",
      "enum": {}
    },
    "912": {
      "name": "LastRptRequested",
      "number": 912,
      "tags": "",
      "enum": {
        "N": "NOT_LAST_MESSAGE",
        "Y": "LAST_MESSAGE"
      }
    },
    "913": {
      "name": "AgreementDesc",
      "number": 913,
      "tags": "",
      "enum": {}
    },
    "914": {
      "name": "AgreementID",
      "number": 914,
      "tags": "",
      "enum": {}
    },
    "915": {
      "name": "AgreementDate",
      "number": 915,
      "tags": "",
      "enum": {}
    },
    "916": {
      "name": "StartDate",
      "number": 916,
      "tags": "",
      "enum": {}
    },
    "917": {
      "name": "EndDate",
      "number": 917,
      "tags": "",
      "enum": {}
    },
    "918": {
      "name": "AgreementCurrency",
      "number": 918,
      "tags": "",
      "enum": {}
    },
    "919": {
      "name": "DeliveryType",
      "number": 919,
      "tags": "",
      "enum": {
        "0": "VERSUS_PAYMENT_DELIVER_PAYMENT",
        "1": "FREE_DELIVER_FREE",
        "2": "TRI_PARTY",
        "3": "HOLD_IN_CUSTODY"
      }
    },
    "920": {
      "name": "EndAccruedInterestAmt",
      "number": 920,
      "tags": "",
      "enum": {}
    },
    "921": {
      "name": "StartCash",
      "number": 921,
      "tags": "",
      "enum": {}
    },
    "922": {
      "name": "EndCash",
      "number": 922,
      "tags": "",
      "enum": {}
    },
    "923": {
      "name": "UserRequestID",
      "number": 923,
      "tags": "",
      "enum": {}
    },
    "924": {
      "name": "UserRequestType",
      "number": 924,
      "tags": "",
      "enum": {
        "1": "LOG_ON_USER",
        "2": "LOG_OFF_USER",
        "3": "CHANGE_PASSWORD_FOR_USER",
        "4": "REQUEST_INDIVIDUAL_USER_STATUS"
      }
    },
    "925": {
      "name": "NewPassword",
      "number": 925,
      "tags": "",
      "enum": {}
    },
    "926": {
      "name": "UserStatus",
      "number": 926,
      "tags": "",
      "enum": {
        "1": "LOGGED_IN",
        "2": "NOT_LOGGED_IN",
        "3": "USER_NOT_RECOGNISED",
        "4": "PASSWORD_INCORRECT",
        "5": "PASSWORD_CHANGED",
        "6": "OTHER",
        "7": "FORCED_USER_LOGOUT_BY_EXCHANGE",
        "8": "SESSION_SHUTDOWN_WARNING"
      }
    },
    "927": {
      "name": "UserStatusText",
      "number": 927,
      "tags": "",
      "enum": {}
    },
    "928": {
      "name": "StatusValue",
      "number": 928,
      "tags": "",
      "enum": {
        "1": "CONNECTED",
        "2": "NOT_CONNECTED_DOWN_EXPECTED_UP",
        "3": "NOT_CONNECTED_DOWN_EXPECTED_DOWN",
        "4": "IN_PROCESS"
      }
    },
    "929": {
      "name": "StatusText",
      "number": 929,
      "tags": "",
      "enum": {}
    },
    "930": {
      "name": "RefCompID",
      "number": 930,
      "tags": "",
      "enum": {}
    },
    "931": {
      "name": "RefSubID",
      "number": 931,
      "tags": "",
      "enum": {}
    },
    "932": {
      "name": "NetworkResponseID",
      "number": 932,
      "tags": "",
      "enum": {}
    },
    "933": {
      "name": "NetworkRequestID",
      "number": 933,
      "tags": "",
      "enum": {}
    },
    "934": {
      "name": "LastNetworkResponseID",
      "number": 934,
      "tags": "",
      "enum": {}
    },
    "935": {
      "name": "NetworkRequestType",
      "number": 935,
      "tags": "",
      "enum": {
        "1": "SNAPSHOT",
        "2": "SUBSCRIBE",
        "4": "STOP_SUBSCRIBING",
        "8": "LEVEL_OF_DETAIL_THEN_NOCOMPIDS_BECOMES_REQUIRED"
      }
    },
    "936": {
      "name": "NoCompIDs",
      "number": 936,
      "tags": "",
      "enum": {}
    },
    "937": {
      "name": "NetworkStatusResponseType",
      "number": 937,
      "tags": "",
      "enum": {
        "1": "FULL",
        "2": "INCREMENTAL_UPDATE"
      }
    },
    "938": {
      "name": "NoCollInquiryQualifier",
      "number": 938,
      "tags": "",
      "enum": {}
    },
    "939": {
      "name": "TrdRptStatus",
      "number": 939,
      "tags": "",
      "enum": {
        "0": "ACCEPTED",
        "1": "REJECTED",
        "3": "ACCEPTED_WITH_ERRORS"
      }
    },
    "940": {
      "name": "AffirmStatus",
      "number": 940,
      "tags": "",
      "enum": {
        "1": "RECEIVED",
        "2": "CONFIRM_REJECTED_I_E_NOT_AFFIRMED",
        "3": "AFFIRMED"
      }
    },
    "941": {
      "name": "UnderlyingStrikeCurrency",
      "number": 941,
      "tags": "",
      "enum": {}
    },
    "942": {
      "name": "LegStrikeCurrency",
      "number": 942,
      "tags": "",
      "enum": {}
    },
    "943": {
      "name": "TimeBracket",
      "number": 943,
      "tags": "",
      "enum": {}
    },
    "944": {
      "name": "CollAction",
      "number": 944,
      "tags": "",
      "enum": {
        "0": "RETAIN",
        "1": "ADD",
        "2": "REMOVE"
      }
    },
    "945": {
      "name": "CollInquiryStatus",
      "number": 945,
      "tags": "",
      "enum": {
        "0": "ACCEPTED",
        "1": "ACCEPTED_WITH_WARNINGS",
        "2": "COMPLETED",
        "3": "COMPLETED_WITH_WARNINGS",
        "4": "REJECTED"
      }
    },
    "946": {
      "name": "CollInquiryResult",
      "number": 946,
      "tags": "",
      "enum": {
        "0": "SUCCESSFUL",
        "1": "INVALID_OR_UNKNOWN_INSTRUMENT",
        "2": "INVALID_OR_UNKNOWN_COLLATERAL_TYPE",
        "3": "INVALID_PARTIES",
        "4": "INVALID_TRANSPORT_TYPE_REQUESTED",
        "5": "INVALID_DESTINATION_REQUESTED",
        "6": "NO_COLLATERAL_FOUND_FOR_THE_TRADE_SPECIFIED",
        "7": "NO_COLLATERAL_FOUND_FOR_THE_ORDER_SPECIFIED",
        "8": "COLLATERAL_INQUIRY_TYPE_NOT_SUPPORTED",
        "9": "UNAUTHORIZED_FOR_COLLATERAL_INQUIRY",
        "99": "OTHER"
      }
    },
    "947": {
      "name": "StrikeCurrency",
      "number": 947,
      "tags": "",
      "enum": {}
    },
    "948": {
      "name": "NoNested3PartyIDs",
      "number": 948,
      "tags": "",
      "enum": {}
    },
    "949": {
      "name": "Nested3PartyID",
      "number": 949,
      "tags": "",
      "enum": {}
    },
    "950": {
      "name": "Nested3PartyIDSource",
      "number": 950,
      "tags": "",
      "enum": {}
    },
    "951": {
      "name": "Nested3PartyRole",
      "number": 951,
      "tags": "",
      "enum": {}
    },
    "952": {
      "name": "NoNested3PartySubIDs",
      "number": 952,
      "tags": "",
      "enum": {}
    },
    "953": {
      "name": "Nested3PartySubID",
      "number": 953,
      "tags": "",
      "enum": {}
    },
    "954": {
      "name": "Nested3PartySubIDType",
      "number": 954,
      "tags": "",
      "enum": {}
    },
    "955": {
      "name": "LegContractSettlMonth",
      "number": 955,
      "tags": "",
      "enum": {}
    },
    "956": {
      "name": "LegInterestAccrualDate",
      "number": 956,
      "tags": "",
      "enum": {}
    },
    "957": {
      "name": "NoStrategyParameters",
      "number": 957,
      "tags": "",
      "enum": {}
    },
    "958": {
      "name": "StrategyParameterName",
      "number": 958,
      "tags": "",
      "enum": {}
    },
    "959": {
      "name": "StrategyParameterType",
      "number": 959,
      "tags": "",
      "enum": {
        "1": "INT",
        "2": "LENGTH",
        "3": "NUMINGROUP",
        "4": "SEQNUM",
        "5": "TAGNUM",
        "6": "FLOAT",
        "7": "QTY",
        "8": "PRICE",
        "9": "PRICEOFFSET",
        "10": "AMT",
        "11": "PERCENTAGE",
        "12": "CHAR",
        "13": "BOOLEAN",
        "14": "STRING",
        "15": "MULTIPLECHARVALUE",
        "16": "CURRENCY",
        "17": "EXCHANGE",
        "18": "MONTHYEAR",
        "19": "UTCTIMESTAMP",
        "20": "UTCTIMEONLY",
        "21": "LOCALMKTDATE",
        "22": "UTCDATEONLY",
        "23": "DATA",
        "24": "MULTIPLESTRINGVALUE",
        "25": "COUNTRY",
        "26": "LANGUAGE",
        "27": "TZTIMEONLY",
        "28": "TZTIMESTAMP",
        "29": "TENOR"
      }
    },
    "960": {
      "name": "StrategyParameterValue",
      "number": 960,
      "tags": "",
      "enum": {}
    },
    "961": {
      "name": "HostCrossID",
      "number": 961,
      "tags": "",
      "enum": {}
    },
    "962": {
      "name": "SideTimeInForce",
      "number": 962,
      "tags": "",
      "enum": {}
    },
    "963": {
      "name": "MDReportID",
      "number": 963,
      "tags": "",
      "enum": {}
    },
    "964": {
      "name": "SecurityReportID",
      "number": 964,
      "tags": "",
      "enum": {}
    },
    "965": {
      "name": "SecurityStatus",
      "number": 965,
      "tags": "",
      "enum": {
        "1": "ACTIVE",
        "2": "INACTIVE"
      }
    },
    "966": {
      "name": "SettleOnOpenFlag",
      "number": 966,
      "tags": "",
      "enum": {}
    },
    "967": {
      "name": "StrikeMultiplier",
      "number": 967,
      "tags": "",
      "enum": {}
    },
    "968": {
      "name": "StrikeValue",
      "number": 968,
      "tags": "",
      "enum": {}
    },
    "969": {
      "name": "MinPriceIncrement",
      "number": 969,
      "tags": "",
      "enum": {}
    },
    "970": {
      "name": "PositionLimit",
      "number": 970,
      "tags": "",
      "enum": {}
    },
    "971": {
      "name": "NTPositionLimit",
      "number": 971,
      "tags": "",
      "enum": {}
    },
    "972": {
      "name": "UnderlyingAllocationPercent",
      "number": 972,
      "tags": "",
      "enum": {}
    },
    "973": {
      "name": "UnderlyingCashAmount",
      "number": 973,
      "tags": "",
      "enum": {}
    },
    "974": {
      "name": "UnderlyingCashType",
      "number": 974,
      "tags": "",
      "enum": {
        "FIXED": "FIXED",
        "DIFF": "DIFF"
      }
    },
    "975": {
      "name": "UnderlyingSettlementType",
      "number": 975,
      "tags": "",
      "enum": {
        "2": "T_1",
        "4": "T_3",
        "5": "T_4"
      }
    },
    "976": {
      "name": "QuantityDate",
      "number": 976,
      "tags": "",
      "enum": {}
    },
    "977": {
      "name": "ContIntRptID",
      "number": 977,
      "tags": "",
      "enum": {}
    },
    "978": {
      "name": "LateIndicator",
      "number": 978,
      "tags": "",
      "enum": {}
    },
    "979": {
      "name": "InputSource",
      "number": 979,
      "tags": "",
      "enum": {}
    },
    "980": {
      "name": "SecurityUpdateAction",
      "number": 980,
      "tags": "",
      "enum": {
        "A": "ADD",
        "D": "DELETE",
        "M": "MODIFY"
      }
    },
    "981": {
      "name": "NoExpiration",
      "number": 981,
      "tags": "",
      "enum": {}
    },
    "982": {
      "name": "ExpirationQtyType",
      "number": 982,
      "tags": "",
      "enum": {
        "1": "AUTO_EXERCISE",
        "2": "NON_AUTO_EXERCISE",
        "3": "FINAL_WILL_BE_EXERCISED",
        "4": "CONTRARY_INTENTION",
        "5": "DIFFERENCE"
      }
    },
    "983": {
      "name": "ExpQty",
      "number": 983,
      "tags": "",
      "enum": {}
    },
    "984": {
      "name": "NoUnderlyingAmounts",
      "number": 984,
      "tags": "",
      "enum": {}
    },
    "985": {
      "name": "UnderlyingPayAmount",
      "number": 985,
      "tags": "",
      "enum": {}
    },
    "986": {
      "name": "UnderlyingCollectAmount",
      "number": 986,
      "tags": "",
      "enum": {}
    },
    "987": {
      "name": "UnderlyingSettlementDate",
      "number": 987,
      "tags": "",
      "enum": {}
    },
    "988": {
      "name": "UnderlyingSettlementStatus",
      "number": 988,
      "tags": "",
      "enum": {}
    },
    "989": {
      "name": "SecondaryIndividualAllocID",
      "number": 989,
      "tags": "",
      "enum": {}
    },
    "990": {
      "name": "LegReportID",
      "number": 990,
      "tags": "",
      "enum": {}
    },
    "991": {
      "name": "RndPx",
      "number": 991,
      "tags": "",
      "enum": {}
    },
    "992": {
      "name": "IndividualAllocType",
      "number": 992,
      "tags": "",
      "enum": {
        "1": "SUB_ALLOCATE",
        "2": "THIRD_PARTY_ALLOCATION"
      }
    },
    "993": {
      "name": "AllocCustomerCapacity",
      "number": 993,
      "tags": "",
      "enum": {}
    },
    "994": {
      "name": "TierCode",
      "number": 994,
      "tags": "",
      "enum": {}
    },
    "996": {
      "name": "UnitOfMeasure",
      "number": 996,
      "tags": "",
      "enum": {
        "Bbl": "BARRELS",
        "Bcf": "BILLION_CUBIC_FEET",
        "Bu": "BUSHELS",
        "lbs": "POUNDS",
        "Gal": "GALLONS",
        "MMbbl": "MILLION_BARRELS",
        "MMBtu": "ONE_MILLION_BTU",
        "MWh": "MEGAWATT_HOURS",
        "oz_tr": "TROY_OUNCES",
        "t": "METRIC_TONS",
        "tn": "TONS",
        "USD": "US_DOLLARS",
        "Alw": "ALLOWANCES"
      }
    },
    "997": {
      "name": "TimeUnit",
      "number": 997,
      "tags": "",
      "enum": {
        "H": "HOUR",
        "Min": "MINUTE",
        "S": "SECOND",
        "D": "DAY",
        "Wk": "WEEK",
        "Mo": "MONTH",
        "Yr": "YEAR"
      }
    },
    "998": {
      "name": "UnderlyingUnitOfMeasure",
      "number": 998,
      "tags": "",
      "enum": {}
    },
    "999": {
      "name": "LegUnitOfMeasure",
      "number": 999,
      "tags": "",
      "enum": {}
    },
    "1000": {
      "name": "UnderlyingTimeUnit",
      "number": 1000,
      "tags": "",
      "enum": {}
    },
    "1001": {
      "name": "LegTimeUnit",
      "number": 1001,
      "tags": "",
      "enum": {}
    },
    "1002": {
      "name": "AllocMethod",
      "number": 1002,
      "tags": "",
      "enum": {
        "1": "AUTOMATIC",
        "2": "GUARANTOR",
        "3": "MANUAL"
      }
    },
    "1003": {
      "name": "TradeID",
      "number": 1003,
      "tags": "",
      "enum": {}
    },
    "1005": {
      "name": "SideTradeReportID",
      "number": 1005,
      "tags": "",
      "enum": {}
    },
    "1006": {
      "name": "SideFillStationCd",
      "number": 1006,
      "tags": "",
      "enum": {}
    },
    "1007": {
      "name": "SideReasonCd",
      "number": 1007,
      "tags": "",
      "enum": {}
    },
    "1008": {
      "name": "SideTrdSubTyp",
      "number": 1008,
      "tags": "",
      "enum": {}
    },
    "1009": {
      "name": "SideLastQty",
      "number": 1009,
      "tags": "",
      "enum": {}
    },
    "1011": {
      "name": "MessageEventSource",
      "number": 1011,
      "tags": "",
      "enum": {}
    },
    "1012": {
      "name": "SideTrdRegTimestamp",
      "number": 1012,
      "tags": "",
      "enum": {}
    },
    "1013": {
      "name": "SideTrdRegTimestampType",
      "number": 1013,
      "tags": "",
      "enum": {}
    },
    "1014": {
      "name": "SideTrdRegTimestampSrc",
      "number": 1014,
      "tags": "",
      "enum": {}
    },
    "1015": {
      "name": "AsOfIndicator",
      "number": 1015,
      "tags": "",
      "enum": {
        "0": "FALSE_TRADE_IS_NOT_AN_ASOF_TRADE",
        "1": "TRUE_TRADE_IS_AN_ASOF_TRADE"
      }
    },
    "1016": {
      "name": "NoSideTrdRegTS",
      "number": 1016,
      "tags": "",
      "enum": {}
    },
    "1017": {
      "name": "LegOptionRatio",
      "number": 1017,
      "tags": "",
      "enum": {}
    },
    "1018": {
      "name": "NoInstrumentParties",
      "number": 1018,
      "tags": "",
      "enum": {}
    },
    "1019": {
      "name": "InstrumentPartyID",
      "number": 1019,
      "tags": "",
      "enum": {}
    },
    "1020": {
      "name": "TradeVolume",
      "number": 1020,
      "tags": "",
      "enum": {}
    },
    "1021": {
      "name": "MDBookType",
      "number": 1021,
      "tags": "",
      "enum": {
        "1": "TOP_OF_BOOK",
        "2": "PRICE_DEPTH",
        "3": "ORDER_DEPTH"
      }
    },
    "1022": {
      "name": "MDFeedType",
      "number": 1022,
      "tags": "",
      "enum": {}
    },
    "1023": {
      "name": "MDPriceLevel",
      "number": 1023,
      "tags": "",
      "enum": {}
    },
    "1024": {
      "name": "MDOriginType",
      "number": 1024,
      "tags": "",
      "enum": {
        "0": "BOOK",
        "1": "OFF_BOOK",
        "2": "CROSS"
      }
    },
    "1025": {
      "name": "FirstPx",
      "number": 1025,
      "tags": "",
      "enum": {}
    },
    "1026": {
      "name": "MDEntrySpotRate",
      "number": 1026,
      "tags": "",
      "enum": {}
    },
    "1027": {
      "name": "MDEntryForwardPoints",
      "number": 1027,
      "tags": "",
      "enum": {}
    },
    "1028": {
      "name": "ManualOrderIndicator",
      "number": 1028,
      "tags": "",
      "enum": {}
    },
    "1029": {
      "name": "CustDirectedOrder",
      "number": 1029,
      "tags": "",
      "enum": {}
    },
    "1030": {
      "name": "ReceivedDeptID",
      "number": 1030,
      "tags": "",
      "enum": {}
    },
    "1031": {
      "name": "CustOrderHandlingInst",
      "number": 1031,
      "tags": "",
      "enum": {
        "ADD": "ADD_ON_ORDER",
        "AON": "ALL_OR_NONE",
        "CNH": "CASH_NOT_HELD",
        "DIR": "DIRECTED_ORDER",
        "E.W": "EXCHANGE_FOR_PHYSICAL_TRANSACTION",
        "FOK": "FILL_OR_KILL",
        "IO": "IMBALANCE_ONLY",
        "IOC": "IMMEDIATE_OR_CANCEL",
        "LOO": "LIMIT_ON_OPEN",
        "LOC": "LIMIT_ON_CLOSE",
        "MAO": "MARKET_AT_OPEN",
        "MAC": "MARKET_AT_CLOSE",
        "MOO": "MARKET_ON_OPEN",
        "MOC": "MARKET_ON_CLOSE",
        "MQT": "MINIMUM_QUANTITY",
        "NH": "NOT_HELD",
        "OVD": "OVER_THE_DAY",
        "PEG": "PEGGED",
        "RSV": "RESERVE_SIZE_ORDER",
        "S.W": "STOP_STOCK_TRANSACTION",
        "SCL": "SCALE",
        "TMO": "TIME_ORDER",
        "TS": "TRAILING_STOP",
        "WRK": "WORK"
      }
    },
    "1032": {
      "name": "OrderHandlingInstSource",
      "number": 1032,
      "tags": "",
      "enum": {
        "1": "NASD_OATS"
      }
    },
    "1033": {
      "name": "DeskType",
      "number": 1033,
      "tags": "",
      "enum": {
        "A": "AGENCY",
        "AR": "ARBITRAGE",
        "D": "DERIVATIVES",
        "IN": "INTERNATIONAL",
        "IS": "INSTITUTIONAL",
        "O": "OTHER",
        "PF": "PREFERRED_TRADING",
        "PR": "PROPRIETARY",
        "PT": "PROGRAM_TRADING",
        "S": "SALES",
        "T": "TRADING"
      }
    },
    "1034": {
      "name": "DeskTypeSource",
      "number": 1034,
      "tags": "",
      "enum": {
        "1": "NASD_OATS"
      }
    },
    "1035": {
      "name": "DeskOrderHandlingInst",
      "number": 1035,
      "tags": "",
      "enum": {
        "ADD": "ADD_ON_ORDER",
        "AON": "ALL_OR_NONE",
        "CNH": "CASH_NOT_HELD",
        "DIR": "DIRECTED_ORDER",
        "E.W": "EXCHANGE_FOR_PHYSICAL_TRANSACTION",
        "FOK": "FILL_OR_KILL",
        "IO": "IMBALANCE_ONLY",
        "IOC": "IMMEDIATE_OR_CANCEL",
        "LOO": "LIMIT_ON_OPEN",
        "LOC": "LIMIT_ON_CLOSE",
        "MAO": "MARKET_AT_OPEN",
        "MAC": "MARKET_AT_CLOSE",
        "MOO": "MARKET_ON_OPEN",
        "MOC": "MARKET_ON_CLOSE",
        "MQT": "MINIMUM_QUANTITY",
        "NH": "NOT_HELD",
        "OVD": "OVER_THE_DAY",
        "PEG": "PEGGED",
        "RSV": "RESERVE_SIZE_ORDER",
        "S.W": "STOP_STOCK_TRANSACTION",
        "SCL": "SCALE",
        "TMO": "TIME_ORDER",
        "TS": "TRAILING_STOP",
        "WRK": "WORK"
      }
    },
    "1036": {
      "name": "ExecAckStatus",
      "number": 1036,
      "tags": "",
      "enum": {
        "0": "RECEIVED_NOT_YET_PROCESSED",
        "1": "ACCEPTED",
        "2": "DONT_KNOW_REJECTED"
      }
    },
    "1037": {
      "name": "UnderlyingDeliveryAmount",
      "number": 1037,
      "tags": "",
      "enum": {}
    },
    "1038": {
      "name": "UnderlyingCapValue",
      "number": 1038,
      "tags": "",
      "enum": {}
    },
    "1039": {
      "name": "UnderlyingSettlMethod",
      "number": 1039,
      "tags": "",
      "enum": {}
    },
    "1040": {
      "name": "SecondaryTradeID",
      "number": 1040,
      "tags": "",
      "enum": {}
    },
    "1041": {
      "name": "FirmTradeID",
      "number": 1041,
      "tags": "",
      "enum": {}
    },
    "1042": {
      "name": "SecondaryFirmTradeID",
      "number": 1042,
      "tags": "",
      "enum": {}
    },
    "1043": {
      "name": "CollApplType",
      "number": 1043,
      "tags": "",
      "enum": {
        "0": "SPECIFIC_DEPOSIT",
        "1": "GENERAL"
      }
    },
    "1044": {
      "name": "UnderlyingAdjustedQuantity",
      "number": 1044,
      "tags": "",
      "enum": {}
    },
    "1045": {
      "name": "UnderlyingFXRate",
      "number": 1045,
      "tags": "",
      "enum": {}
    },
    "1046": {
      "name": "UnderlyingFXRateCalc",
      "number": 1046,
      "tags": "",
      "enum": {
        "D": "DIVIDE",
        "M": "MULTIPLY"
      }
    },
    "1047": {
      "name": "AllocPositionEffect",
      "number": 1047,
      "tags": "",
      "enum": {
        "O": "OPEN",
        "C": "CLOSE",
        "R": "ROLLED",
        "F": "FIFO"
      }
    },
    "1048": {
      "name": "DealingCapacity",
      "number": 1048,
      "tags": "",
      "enum": {
        "A": "AGENT",
        "P": "PRINCIPAL",
        "R": "RISKLESS_PRINCIPAL"
      }
    },
    "1049": {
      "name": "InstrmtAssignmentMethod",
      "number": 1049,
      "tags": "",
      "enum": {}
    },
    "1050": {
      "name": "InstrumentPartyIDSource",
      "number": 1050,
      "tags": "",
      "enum": {}
    },
    "1051": {
      "name": "InstrumentPartyRole",
      "number": 1051,
      "tags": "",
      "enum": {}
    },
    "1052": {
      "name": "NoInstrumentPartySubIDs",
      "number": 1052,
      "tags": "",
      "enum": {}
    },
    "1053": {
      "name": "InstrumentPartySubID",
      "number": 1053,
      "tags": "",
      "enum": {}
    },
    "1054": {
      "name": "InstrumentPartySubIDType",
      "number": 1054,
      "tags": "",
      "enum": {}
    },
    "1055": {
      "name": "PositionCurrency",
      "number": 1055,
      "tags": "",
      "enum": {}
    },
    "1056": {
      "name": "CalculatedCcyLastQty",
      "number": 1056,
      "tags": "",
      "enum": {}
    },
    "1057": {
      "name": "AggressorIndicator",
      "number": 1057,
      "tags": "",
      "enum": {
        "Y": "ORDER_INITIATOR_IS_AGGRESSOR",
        "N": "ORDER_INITIATOR_IS_PASSIVE"
      }
    },
    "1058": {
      "name": "NoUndlyInstrumentParties",
      "number": 1058,
      "tags": "",
      "enum": {}
    },
    "1059": {
      "name": "UnderlyingInstrumentPartyID",
      "number": 1059,
      "tags": "",
      "enum": {}
    },
    "1060": {
      "name": "UnderlyingInstrumentPartyIDSource",
      "number": 1060,
      "tags": "",
      "enum": {}
    },
    "1061": {
      "name": "UnderlyingInstrumentPartyRole",
      "number": 1061,
      "tags": "",
      "enum": {}
    },
    "1062": {
      "name": "NoUndlyInstrumentPartySubIDs",
      "number": 1062,
      "tags": "",
      "enum": {}
    },
    "1063": {
      "name": "UnderlyingInstrumentPartySubID",
      "number": 1063,
      "tags": "",
      "enum": {}
    },
    "1064": {
      "name": "UnderlyingInstrumentPartySubIDType",
      "number": 1064,
      "tags": "",
      "enum": {}
    },
    "1065": {
      "name": "BidSwapPoints",
      "number": 1065,
      "tags": "",
      "enum": {}
    },
    "1066": {
      "name": "OfferSwapPoints",
      "number": 1066,
      "tags": "",
      "enum": {}
    },
    "1067": {
      "name": "LegBidForwardPoints",
      "number": 1067,
      "tags": "",
      "enum": {}
    },
    "1068": {
      "name": "LegOfferForwardPoints",
      "number": 1068,
      "tags": "",
      "enum": {}
    },
    "1069": {
      "name": "SwapPoints",
      "number": 1069,
      "tags": "",
      "enum": {}
    },
    "1070": {
      "name": "MDQuoteType",
      "number": 1070,
      "tags": "",
      "enum": {
        "0": "INDICATIVE",
        "1": "TRADEABLE",
        "2": "RESTRICTED_TRADEABLE",
        "3": "COUNTER",
        "4": "INDICATIVE_AND_TRADEABLE"
      }
    },
    "1071": {
      "name": "LastSwapPoints",
      "number": 1071,
      "tags": "",
      "enum": {}
    },
    "1072": {
      "name": "SideGrossTradeAmt",
      "number": 1072,
      "tags": "",
      "enum": {}
    },
    "1073": {
      "name": "LegLastForwardPoints",
      "number": 1073,
      "tags": "",
      "enum": {}
    },
    "1074": {
      "name": "LegCalculatedCcyLastQty",
      "number": 1074,
      "tags": "",
      "enum": {}
    },
    "1075": {
      "name": "LegGrossTradeAmt",
      "number": 1075,
      "tags": "",
      "enum": {}
    },
    "1079": {
      "name": "MaturityTime",
      "number": 1079,
      "tags": "",
      "enum": {}
    },
    "1080": {
      "name": "RefOrderID",
      "number": 1080,
      "tags": "",
      "enum": {}
    },
    "1081": {
      "name": "RefOrderIDSource",
      "number": 1081,
      "tags": "",
      "enum": {
        "0": "SECONDARYORDERID",
        "1": "ORDERID",
        "2": "MDENTRYID",
        "3": "QUOTEENTRYID",
        "4": "ORIGINAL_ORDER_ID"
      }
    },
    "1082": {
      "name": "SecondaryDisplayQty",
      "number": 1082,
      "tags": "",
      "enum": {}
    },
    "1083": {
      "name": "DisplayWhen",
      "number": 1083,
      "tags": "",
      "enum": {
        "1": "IMMEDIATE",
        "2": "EXHAUST"
      }
    },
    "1084": {
      "name": "DisplayMethod",
      "number": 1084,
      "tags": "",
      "enum": {
        "1": "INITIAL",
        "2": "NEW",
        "3": "RANDOM",
        "4": "UNDISCLOSED"
      }
    },
    "1085": {
      "name": "DisplayLowQty",
      "number": 1085,
      "tags": "",
      "enum": {}
    },
    "1086": {
      "name": "DisplayHighQty",
      "number": 1086,
      "tags": "",
      "enum": {}
    },
    "1087": {
      "name": "DisplayMinIncr",
      "number": 1087,
      "tags": "",
      "enum": {}
    },
    "1088": {
      "name": "RefreshQty",
      "number": 1088,
      "tags": "",
      "enum": {}
    },
    "1089": {
      "name": "MatchIncrement",
      "number": 1089,
      "tags": "",
      "enum": {}
    },
    "1090": {
      "name": "MaxPriceLevels",
      "number": 1090,
      "tags": "",
      "enum": {}
    },
    "1091": {
      "name": "PreTradeAnonymity",
      "number": 1091,
      "tags": "",
      "enum": {}
    },
    "1092": {
      "name": "PriceProtectionScope",
      "number": 1092,
      "tags": "",
      "enum": {
        "0": "NONE",
        "1": "LOCAL",
        "2": "NATIONAL",
        "3": "GLOBAL"
      }
    },
    "1093": {
      "name": "LotType",
      "number": 1093,
      "tags": "",
      "enum": {
        "1": "ODD_LOT",
        "2": "ROUND_LOT",
        "3": "BLOCK_LOT",
        "4": "ROUND_LOT_BASED_UPON_UNITOFMEASURE"
      }
    },
    "1094": {
      "name": "PegPriceType",
      "number": 1094,
      "tags": "",
      "enum": {
        "1": "LAST_PEG",
        "2": "MID_PRICE_PEG",
        "3": "OPENING_PEG",
        "4": "MARKET_PEG",
        "5": "PRIMARY_PEG",
        "7": "PEG_TO_VWAP",
        "8": "TRAILING_STOP_PEG",
        "9": "PEG_TO_LIMIT_PRICE"
      }
    },
    "1095": {
      "name": "PeggedRefPrice",
      "number": 1095,
      "tags": "",
      "enum": {}
    },
    "1096": {
      "name": "PegSecurityIDSource",
      "number": 1096,
      "tags": "",
      "enum": {}
    },
    "1097": {
      "name": "PegSecurityID",
      "number": 1097,
      "tags": "",
      "enum": {}
    },
    "1098": {
      "name": "PegSymbol",
      "number": 1098,
      "tags": "",
      "enum": {}
    },
    "1099": {
      "name": "PegSecurityDesc",
      "number": 1099,
      "tags": "",
      "enum": {}
    },
    "1100": {
      "name": "TriggerType",
      "number": 1100,
      "tags": "",
      "enum": {
        "1": "PARTIAL_EXECUTION",
        "2": "SPECIFIED_TRADING_SESSION",
        "3": "NEXT_AUCTION",
        "4": "PRICE_MOVEMENT"
      }
    },
    "1101": {
      "name": "TriggerAction",
      "number": 1101,
      "tags": "",
      "enum": {
        "1": "ACTIVATE",
        "2": "MODIFY",
        "3": "CANCEL"
      }
    },
    "1102": {
      "name": "TriggerPrice",
      "number": 1102,
      "tags": "",
      "enum": {}
    },
    "1103": {
      "name": "TriggerSymbol",
      "number": 1103,
      "tags": "",
      "enum": {}
    },
    "1104": {
      "name": "TriggerSecurityID",
      "number": 1104,
      "tags": "",
      "enum": {}
    },
    "1105": {
      "name": "TriggerSecurityIDSource",
      "number": 1105,
      "tags": "",
      "enum": {}
    },
    "1106": {
      "name": "TriggerSecurityDesc",
      "number": 1106,
      "tags": "",
      "enum": {}
    },
    "1107": {
      "name": "TriggerPriceType",
      "number": 1107,
      "tags": "",
      "enum": {
        "1": "BEST_OFFER",
        "2": "LAST_TRADE",
        "3": "BEST_BID",
        "4": "BEST_BID_OR_LAST_TRADE",
        "5": "BEST_OFFER_OR_LAST_TRADE",
        "6": "BEST_MID"
      }
    },
    "1108": {
      "name": "TriggerPriceTypeScope",
      "number": 1108,
      "tags": "",
      "enum": {
        "0": "NONE",
        "1": "LOCAL",
        "2": "NATIONAL",
        "3": "GLOBAL"
      }
    },
    "1109": {
      "name": "TriggerPriceDirection",
      "number": 1109,
      "tags": "",
      "enum": {
        "U": "TRIGGER_IF_THE_PRICE_OF_THE_SPECIFIED_TYPE_GOES_UP_TO_OR_THROUGH_THE_SPECIFIED_TRIGGER_PRICE_",
        "D": "TRIGGER_IF_THE_PRICE_OF_THE_SPECIFIED_TYPE_GOES_DOWN_TO_OR_THROUGH_THE_SPECIFIED_TRIGGER_PRICE_"
      }
    },
    "1110": {
      "name": "TriggerNewPrice",
      "number": 1110,
      "tags": "",
      "enum": {}
    },
    "1111": {
      "name": "TriggerOrderType",
      "number": 1111,
      "tags": "",
      "enum": {
        "1": "MARKET",
        "2": "LIMIT"
      }
    },
    "1112": {
      "name": "TriggerNewQty",
      "number": 1112,
      "tags": "",
      "enum": {}
    },
    "1113": {
      "name": "TriggerTradingSessionID",
      "number": 1113,
      "tags": "",
      "enum": {}
    },
    "1114": {
      "name": "TriggerTradingSessionSubID",
      "number": 1114,
      "tags": "",
      "enum": {}
    },
    "1115": {
      "name": "OrderCategory",
      "number": 1115,
      "tags": "",
      "enum": {
        "1": "ORDER",
        "2": "QUOTE",
        "3": "PRIVATELY_NEGOTIATED_TRADE",
        "4": "MULTILEG_ORDER",
        "5": "LINKED_ORDER",
        "6": "QUOTE_REQUEST",
        "7": "IMPLIED_ORDER",
        "8": "CROSS_ORDER",
        "9": "STREAMING_PRICE"
      }
    },
    "1116": {
      "name": "NoRootPartyIDs",
      "number": 1116,
      "tags": "",
      "enum": {}
    },
    "1117": {
      "name": "RootPartyID",
      "number": 1117,
      "tags": "",
      "enum": {}
    },
    "1118": {
      "name": "RootPartyIDSource",
      "number": 1118,
      "tags": "",
      "enum": {}
    },
    "1119": {
      "name": "RootPartyRole",
      "number": 1119,
      "tags": "",
      "enum": {}
    },
    "1120": {
      "name": "NoRootPartySubIDs",
      "number": 1120,
      "tags": "",
      "enum": {}
    },
    "1121": {
      "name": "RootPartySubID",
      "number": 1121,
      "tags": "",
      "enum": {}
    },
    "1122": {
      "name": "RootPartySubIDType",
      "number": 1122,
      "tags": "",
      "enum": {}
    },
    "1123": {
      "name": "TradeHandlingInstr",
      "number": 1123,
      "tags": "",
      "enum": {
        "0": "TRADE_CONFIRMATION",
        "1": "TWO_PARTY_REPORT",
        "2": "ONE_PARTY_REPORT_FOR_MATCHING",
        "3": "ONE_PARTY_REPORT_FOR_PASS_THROUGH",
        "4": "AUTOMATED_FLOOR_ORDER_ROUTING",
        "5": "TWO_PARTY_REPORT_FOR_CLAIM"
      }
    },
    "1124": {
      "name": "OrigTradeHandlingInstr",
      "number": 1124,
      "tags": "",
      "enum": {}
    },
    "1125": {
      "name": "OrigTradeDate",
      "number": 1125,
      "tags": "",
      "enum": {}
    },
    "1126": {
      "name": "OrigTradeID",
      "number": 1126,
      "tags": "",
      "enum": {}
    },
    "1127": {
      "name": "OrigSecondaryTradeID",
      "number": 1127,
      "tags": "",
      "enum": {}
    },
    "1128": {
      "name": "ApplVerID",
      "number": 1128,
      "tags": "header",
      "enum": {
        "0": "FIX27",
        "1": "FIX30",
        "2": "FIX40",
        "3": "FIX41",
        "4": "FIX42",
        "5": "FIX43",
        "6": "FIX44",
        "7": "FIX50",
        "8": "FIX50SP1",
        "9": "FIX50SP2"
      }
    },
    "1129": {
      "name": "CstmApplVerID",
      "number": 1129,
      "tags": "header",
      "enum": {}
    },
    "1130": {
      "name": "RefApplVerID",
      "number": 1130,
      "tags": "",
      "enum": {}
    },
    "1131": {
      "name": "RefCstmApplVerID",
      "number": 1131,
      "tags": "",
      "enum": {}
    },
    "1132": {
      "name": "TZTransactTime",
      "number": 1132,
      "tags": "",
      "enum": {}
    },
    "1133": {
      "name": "ExDestinationIDSource",
      "number": 1133,
      "tags": "",
      "enum": {
        "B": "BIC",
        "C": "GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER",
        "D": "PROPRIETARY_CUSTOM_CODE",
        "E": "ISO_COUNTRY_CODE",
        "G": "MIC"
      }
    },
    "1134": {
      "name": "ReportedPxDiff",
      "number": 1134,
      "tags": "",
      "enum": {}
    },
    "1135": {
      "name": "RptSys",
      "number": 1135,
      "tags": "",
      "enum": {}
    },
    "1136": {
      "name": "AllocClearingFeeIndicator",
      "number": 1136,
      "tags": "",
      "enum": {}
    },
    "1137": {
      "name": "DefaultApplVerID",
      "number": 1137,
      "tags": "",
      "enum": {}
    },
    "1138": {
      "name": "DisplayQty",
      "number": 1138,
      "tags": "",
      "enum": {}
    },
    "1139": {
      "name": "ExchangeSpecialInstructions",
      "number": 1139,
      "tags": "",
      "enum": {}
    },
    "1140": {
      "name": "MaxTradeVol",
      "number": 1140,
      "tags": "",
      "enum": {}
    },
    "1141": {
      "name": "NoMDFeedTypes",
      "number": 1141,
      "tags": "",
      "enum": {}
    },
    "1142": {
      "name": "MatchAlgorithm",
      "number": 1142,
      "tags": "",
      "enum": {}
    },
    "1143": {
      "name": "MaxPriceVariation",
      "number": 1143,
      "tags": "",
      "enum": {}
    },
    "1144": {
      "name": "ImpliedMarketIndicator",
      "number": 1144,
      "tags": "",
      "enum": {
        "0": "NOT_IMPLIED",
        "1": "IMPLIED_IN_THE_EXISTENCE_OF_A_MULTI_LEG_INSTRUMENT_IS_IMPLIED_BY_THE_LEGS_OF_THAT_INSTRUMENT",
        "2": "IMPLIED_OUT_THE_EXISTENCE_OF_THE_UNDERLYING_LEGS_ARE_IMPLIED_BY_THE_MULTI_LEG_INSTRUMENT",
        "3": "BOTH_IMPLIED_IN_AND_IMPLIED_OUT"
      }
    },
    "1145": {
      "name": "EventTime",
      "number": 1145,
      "tags": "",
      "enum": {}
    },
    "1146": {
      "name": "MinPriceIncrementAmount",
      "number": 1146,
      "tags": "",
      "enum": {}
    },
    "1147": {
      "name": "UnitOfMeasureQty",
      "number": 1147,
      "tags": "",
      "enum": {}
    },
    "1148": {
      "name": "LowLimitPrice",
      "number": 1148,
      "tags": "",
      "enum": {}
    },
    "1149": {
      "name": "HighLimitPrice",
      "number": 1149,
      "tags": "",
      "enum": {}
    },
    "1150": {
      "name": "TradingReferencePrice",
      "number": 1150,
      "tags": "",
      "enum": {}
    },
    "1151": {
      "name": "SecurityGroup",
      "number": 1151,
      "tags": "",
      "enum": {}
    },
    "1152": {
      "name": "LegNumber",
      "number": 1152,
      "tags": "",
      "enum": {}
    },
    "1153": {
      "name": "SettlementCycleNo",
      "number": 1153,
      "tags": "",
      "enum": {}
    },
    "1154": {
      "name": "SideCurrency",
      "number": 1154,
      "tags": "",
      "enum": {}
    },
    "1155": {
      "name": "SideSettlCurrency",
      "number": 1155,
      "tags": "",
      "enum": {}
    },
    "1156": {
      "name": "ApplExtID",
      "number": 1156,
      "tags": "header",
      "enum": {}
    },
    "1157": {
      "name": "CcyAmt",
      "number": 1157,
      "tags": "",
      "enum": {}
    },
    "1158": {
      "name": "NoSettlDetails",
      "number": 1158,
      "tags": "",
      "enum": {}
    },
    "1159": {
      "name": "SettlObligMode",
      "number": 1159,
      "tags": "",
      "enum": {
        "1": "PRELIMINARY",
        "2": "FINAL"
      }
    },
    "1160": {
      "name": "SettlObligMsgID",
      "number": 1160,
      "tags": "",
      "enum": {}
    },
    "1161": {
      "name": "SettlObligID",
      "number": 1161,
      "tags": "",
      "enum": {}
    },
    "1162": {
      "name": "SettlObligTransType",
      "number": 1162,
      "tags": "",
      "enum": {
        "C": "CANCEL",
        "N": "NEW",
        "R": "REPLACE",
        "T": "RESTATE"
      }
    },
    "1163": {
      "name": "SettlObligRefID",
      "number": 1163,
      "tags": "",
      "enum": {}
    },
    "1164": {
      "name": "SettlObligSource",
      "number": 1164,
      "tags": "",
      "enum": {
        "1": "INSTRUCTIONS_OF_BROKER",
        "2": "INSTRUCTIONS_FOR_INSTITUTION",
        "3": "INVESTOR"
      }
    },
    "1165": {
      "name": "NoSettlOblig",
      "number": 1165,
      "tags": "",
      "enum": {}
    },
    "1166": {
      "name": "QuoteMsgID",
      "number": 1166,
      "tags": "",
      "enum": {}
    },
    "1167": {
      "name": "QuoteEntryStatus",
      "number": 1167,
      "tags": "",
      "enum": {
        "0": "ACCEPTED",
        "5": "REJECTED",
        "6": "REMOVED_FROM_MARKET",
        "7": "EXPIRED",
        "12": "LOCKED_MARKET_WARNING",
        "13": "CROSS_MARKET_WARNING",
        "14": "CANCELED_DUE_TO_LOCK_MARKET",
        "15": "CANCELED_DUE_TO_CROSS_MARKET",
        "16": "ACTIVE"
      }
    },
    "1168": {
      "name": "TotNoCxldQuotes",
      "number": 1168,
      "tags": "",
      "enum": {}
    },
    "1169": {
      "name": "TotNoAccQuotes",
      "number": 1169,
      "tags": "",
      "enum": {}
    },
    "1170": {
      "name": "TotNoRejQuotes",
      "number": 1170,
      "tags": "",
      "enum": {}
    },
    "1171": {
      "name": "PrivateQuote",
      "number": 1171,
      "tags": "",
      "enum": {}
    },
    "1172": {
      "name": "RespondentType",
      "number": 1172,
      "tags": "",
      "enum": {
        "1": "ALL_MARKET_PARTICIPANTS",
        "2": "SPECIFIED_MARKET_PARTICIPANTS",
        "3": "ALL_MARKET_MAKERS",
        "4": "PRIMARY_MARKET_MAKER"
      }
    },
    "1173": {
      "name": "MDSubBookType",
      "number": 1173,
      "tags": "",
      "enum": {}
    },
    "1174": {
      "name": "SecurityTradingEvent",
      "number": 1174,
      "tags": "",
      "enum": {
        "1": "ORDER_IMBALANCE_AUCTION_IS_EXTENDED",
        "2": "TRADING_RESUMES",
        "3": "PRICE_VOLATILITY_INTERRUPTION",
        "4": "CHANGE_OF_TRADING_SESSION",
        "5": "CHANGE_OF_TRADING_SUBSESSION",
        "6": "CHANGE_OF_SECURITY_TRADING_STATUS",
        "7": "CHANGE_OF_BOOK_TYPE",
        "8": "CHANGE_OF_MARKET_DEPTH"
      }
    },
    "1175": {
      "name": "NoStatsIndicators",
      "number": 1175,
      "tags": "",
      "enum": {}
    },
    "1176": {
      "name": "StatsType",
      "number": 1176,
      "tags": "",
      "enum": {
        "1": "EXCHANGE_LAST",
        "2": "HIGH_LOW_PRICE",
        "3": "AVERAGE_PRICE",
        "4": "TURNOVER"
      }
    },
    "1177": {
      "name": "NoOfSecSizes",
      "number": 1177,
      "tags": "",
      "enum": {}
    },
    "1178": {
      "name": "MDSecSizeType",
      "number": 1178,
      "tags": "",
      "enum": {
        "1": "CUSTOMER"
      }
    },
    "1179": {
      "name": "MDSecSize",
      "number": 1179,
      "tags": "",
      "enum": {}
    },
    "1180": {
      "name": "ApplID",
      "number": 1180,
      "tags": "",
      "enum": {}
    },
    "1181": {
      "name": "ApplSeqNum",
      "number": 1181,
      "tags": "",
      "enum": {}
    },
    "1182": {
      "name": "ApplBegSeqNum",
      "number": 1182,
      "tags": "",
      "enum": {}
    },
    "1183": {
      "name": "ApplEndSeqNum",
      "number": 1183,
      "tags": "",
      "enum": {}
    },
    "1184": {
      "name": "SecurityXMLLen",
      "number": 1184,
      "tags": "",
      "enum": {}
    },
    "1185": {
      "name": "SecurityXML",
      "number": 1185,
      "tags": "",
      "enum": {}
    },
    "1186": {
      "name": "SecurityXMLSchema",
      "number": 1186,
      "tags": "",
      "enum": {}
    },
    "1187": {
      "name": "RefreshIndicator",
      "number": 1187,
      "tags": "",
      "enum": {}
    },
    "1188": {
      "name": "Volatility",
      "number": 1188,
      "tags": "",
      "enum": {}
    },
    "1189": {
      "name": "TimeToExpiration",
      "number": 1189,
      "tags": "",
      "enum": {}
    },
    "1190": {
      "name": "RiskFreeRate",
      "number": 1190,
      "tags": "",
      "enum": {}
    },
    "1191": {
      "name": "PriceUnitOfMeasure",
      "number": 1191,
      "tags": "",
      "enum": {}
    },
    "1192": {
      "name": "PriceUnitOfMeasureQty",
      "number": 1192,
      "tags": "",
      "enum": {}
    },
    "1193": {
      "name": "SettlMethod",
      "number": 1193,
      "tags": "",
      "enum": {
        "C": "CASH_SETTLEMENT_REQUIRED",
        "P": "PHYSICAL_SETTLEMENT_REQUIRED"
      }
    },
    "1194": {
      "name": "ExerciseStyle",
      "number": 1194,
      "tags": "",
      "enum": {
        "0": "EUROPEAN",
        "1": "AMERICAN",
        "2": "BERMUDA"
      }
    },
    "1195": {
      "name": "OptPayoutAmount",
      "number": 1195,
      "tags": "",
      "enum": {}
    },
    "1196": {
      "name": "PriceQuoteMethod",
      "number": 1196,
      "tags": "",
      "enum": {
        "STD": "STANDARD_MONEY_PER_UNIT_OF_A_PHYSICAL",
        "INX": "INDEX",
        "INT": "INTEREST_RATE_INDEX",
        "PCTPAR": "PERCENT_OF_PAR"
      }
    },
    "1197": {
      "name": "ValuationMethod",
      "number": 1197,
      "tags": "",
      "enum": {
        "EQTY": "PREMIUM_STYLE",
        "FUT": "FUTURES_STYLE_MARK_TO_MARKET",
        "FUTDA": "FUTURES_STYLE_WITH_AN_ATTACHED_CASH_ADJUSTMENT",
        "CDS": "CDS_STYLE_COLLATERALIZATION_OF_MARKET_TO_MARKET_AND_COUPON",
        "CDSD": "CDS_IN_DELIVERY_USE_RECOVERY_RATE_TO_CALCULATE_OBLIGATION"
      }
    },
    "1198": {
      "name": "ListMethod",
      "number": 1198,
      "tags": "",
      "enum": {
        "0": "PRE_LISTED_ONLY",
        "1": "USER_REQUESTED"
      }
    },
    "1199": {
      "name": "CapPrice",
      "number": 1199,
      "tags": "",
      "enum": {}
    },
    "1200": {
      "name": "FloorPrice",
      "number": 1200,
      "tags": "",
      "enum": {}
    },
    "1201": {
      "name": "NoStrikeRules",
      "number": 1201,
      "tags": "",
      "enum": {}
    },
    "1202": {
      "name": "StartStrikePxRange",
      "number": 1202,
      "tags": "",
      "enum": {}
    },
    "1203": {
      "name": "EndStrikePxRange",
      "number": 1203,
      "tags": "",
      "enum": {}
    },
    "1204": {
      "name": "StrikeIncrement",
      "number": 1204,
      "tags": "",
      "enum": {}
    },
    "1205": {
      "name": "NoTickRules",
      "number": 1205,
      "tags": "",
      "enum": {}
    },
    "1206": {
      "name": "StartTickPriceRange",
      "number": 1206,
      "tags": "",
      "enum": {}
    },
    "1207": {
      "name": "EndTickPriceRange",
      "number": 1207,
      "tags": "",
      "enum": {}
    },
    "1208": {
      "name": "TickIncrement",
      "number": 1208,
      "tags": "",
      "enum": {}
    },
    "1209": {
      "name": "TickRuleType",
      "number": 1209,
      "tags": "",
      "enum": {
        "0": "REGULAR",
        "1": "VARIABLE",
        "2": "FIXED",
        "3": "TRADED_AS_A_SPREAD_LEG",
        "4": "SETTLED_AS_A_SPREAD_LEG"
      }
    },
    "1210": {
      "name": "NestedInstrAttribType",
      "number": 1210,
      "tags": "",
      "enum": {}
    },
    "1211": {
      "name": "NestedInstrAttribValue",
      "number": 1211,
      "tags": "",
      "enum": {}
    },
    "1212": {
      "name": "LegMaturityTime",
      "number": 1212,
      "tags": "",
      "enum": {}
    },
    "1213": {
      "name": "UnderlyingMaturityTime",
      "number": 1213,
      "tags": "",
      "enum": {}
    },
    "1214": {
      "name": "DerivativeSymbol",
      "number": 1214,
      "tags": "",
      "enum": {}
    },
    "1215": {
      "name": "DerivativeSymbolSfx",
      "number": 1215,
      "tags": "",
      "enum": {}
    },
    "1216": {
      "name": "DerivativeSecurityID",
      "number": 1216,
      "tags": "",
      "enum": {}
    },
    "1217": {
      "name": "DerivativeSecurityIDSource",
      "number": 1217,
      "tags": "",
      "enum": {}
    },
    "1218": {
      "name": "NoDerivativeSecurityAltID",
      "number": 1218,
      "tags": "",
      "enum": {}
    },
    "1219": {
      "name": "DerivativeSecurityAltID",
      "number": 1219,
      "tags": "",
      "enum": {}
    },
    "1220": {
      "name": "DerivativeSecurityAltIDSource",
      "number": 1220,
      "tags": "",
      "enum": {}
    },
    "1221": {
      "name": "SecondaryLowLimitPrice",
      "number": 1221,
      "tags": "",
      "enum": {}
    },
    "1222": {
      "name": "MaturityRuleID",
      "number": 1222,
      "tags": "",
      "enum": {}
    },
    "1223": {
      "name": "StrikeRuleID",
      "number": 1223,
      "tags": "",
      "enum": {}
    },
    "1224": {
      "name": "LegUnitOfMeasureQty",
      "number": 1224,
      "tags": "",
      "enum": {}
    },
    "1225": {
      "name": "DerivativeOptPayAmount",
      "number": 1225,
      "tags": "",
      "enum": {}
    },
    "1226": {
      "name": "EndMaturityMonthYear",
      "number": 1226,
      "tags": "",
      "enum": {}
    },
    "1227": {
      "name": "ProductComplex",
      "number": 1227,
      "tags": "",
      "enum": {}
    },
    "1228": {
      "name": "DerivativeProductComplex",
      "number": 1228,
      "tags": "",
      "enum": {}
    },
    "1229": {
      "name": "MaturityMonthYearIncrement",
      "number": 1229,
      "tags": "",
      "enum": {}
    },
    "1230": {
      "name": "SecondaryHighLimitPrice",
      "number": 1230,
      "tags": "",
      "enum": {}
    },
    "1231": {
      "name": "MinLotSize",
      "number": 1231,
      "tags": "",
      "enum": {}
    },
    "1232": {
      "name": "NoExecInstRules",
      "number": 1232,
      "tags": "",
      "enum": {}
    },
    "1234": {
      "name": "NoLotTypeRules",
      "number": 1234,
      "tags": "",
      "enum": {}
    },
    "1235": {
      "name": "NoMatchRules",
      "number": 1235,
      "tags": "",
      "enum": {}
    },
    "1236": {
      "name": "NoMaturityRules",
      "number": 1236,
      "tags": "",
      "enum": {}
    },
    "1237": {
      "name": "NoOrdTypeRules",
      "number": 1237,
      "tags": "",
      "enum": {}
    },
    "1239": {
      "name": "NoTimeInForceRules",
      "number": 1239,
      "tags": "",
      "enum": {}
    },
    "1240": {
      "name": "SecondaryTradingReferencePrice",
      "number": 1240,
      "tags": "",
      "enum": {}
    },
    "1241": {
      "name": "StartMaturityMonthYear",
      "number": 1241,
      "tags": "",
      "enum": {}
    },
    "1242": {
      "name": "FlexProductEligibilityIndicator",
      "number": 1242,
      "tags": "",
      "enum": {}
    },
    "1243": {
      "name": "DerivFlexProductEligibilityIndicator",
      "number": 1243,
      "tags": "",
      "enum": {}
    },
    "1244": {
      "name": "FlexibleIndicator",
      "number": 1244,
      "tags": "",
      "enum": {}
    },
    "1245": {
      "name": "TradingCurrency",
      "number": 1245,
      "tags": "",
      "enum": {}
    },
    "1246": {
      "name": "DerivativeProduct",
      "number": 1246,
      "tags": "",
      "enum": {}
    },
    "1247": {
      "name": "DerivativeSecurityGroup",
      "number": 1247,
      "tags": "",
      "enum": {}
    },
    "1248": {
      "name": "DerivativeCFICode",
      "number": 1248,
      "tags": "",
      "enum": {}
    },
    "1249": {
      "name": "DerivativeSecurityType",
      "number": 1249,
      "tags": "",
      "enum": {}
    },
    "1250": {
      "name": "DerivativeSecuritySubType",
      "number": 1250,
      "tags": "",
      "enum": {}
    },
    "1251": {
      "name": "DerivativeMaturityMonthYear",
      "number": 1251,
      "tags": "",
      "enum": {}
    },
    "1252": {
      "name": "DerivativeMaturityDate",
      "number": 1252,
      "tags": "",
      "enum": {}
    },
    "1253": {
      "name": "DerivativeMaturityTime",
      "number": 1253,
      "tags": "",
      "enum": {}
    },
    "1254": {
      "name": "DerivativeSettleOnOpenFlag",
      "number": 1254,
      "tags": "",
      "enum": {}
    },
    "1255": {
      "name": "DerivativeInstrmtAssignmentMethod",
      "number": 1255,
      "tags": "",
      "enum": {}
    },
    "1256": {
      "name": "DerivativeSecurityStatus",
      "number": 1256,
      "tags": "",
      "enum": {}
    },
    "1257": {
      "name": "DerivativeInstrRegistry",
      "number": 1257,
      "tags": "",
      "enum": {}
    },
    "1258": {
      "name": "DerivativeCountryOfIssue",
      "number": 1258,
      "tags": "",
      "enum": {}
    },
    "1259": {
      "name": "DerivativeStateOrProvinceOfIssue",
      "number": 1259,
      "tags": "",
      "enum": {}
    },
    "1260": {
      "name": "DerivativeLocaleOfIssue",
      "number": 1260,
      "tags": "",
      "enum": {}
    },
    "1261": {
      "name": "DerivativeStrikePrice",
      "number": 1261,
      "tags": "",
      "enum": {}
    },
    "1262": {
      "name": "DerivativeStrikeCurrency",
      "number": 1262,
      "tags": "",
      "enum": {}
    },
    "1263": {
      "name": "DerivativeStrikeMultiplier",
      "number": 1263,
      "tags": "",
      "enum": {}
    },
    "1264": {
      "name": "DerivativeStrikeValue",
      "number": 1264,
      "tags": "",
      "enum": {}
    },
    "1265": {
      "name": "DerivativeOptAttribute",
      "number": 1265,
      "tags": "",
      "enum": {}
    },
    "1266": {
      "name": "DerivativeContractMultiplier",
      "number": 1266,
      "tags": "",
      "enum": {}
    },
    "1267": {
      "name": "DerivativeMinPriceIncrement",
      "number": 1267,
      "tags": "",
      "enum": {}
    },
    "1268": {
      "name": "DerivativeMinPriceIncrementAmount",
      "number": 1268,
      "tags": "",
      "enum": {}
    },
    "1269": {
      "name": "DerivativeUnitOfMeasure",
      "number": 1269,
      "tags": "",
      "enum": {}
    },
    "1270": {
      "name": "DerivativeUnitOfMeasureQty",
      "number": 1270,
      "tags": "",
      "enum": {}
    },
    "1271": {
      "name": "DerivativeTimeUnit",
      "number": 1271,
      "tags": "",
      "enum": {}
    },
    "1272": {
      "name": "DerivativeSecurityExchange",
      "number": 1272,
      "tags": "",
      "enum": {}
    },
    "1273": {
      "name": "DerivativePositionLimit",
      "number": 1273,
      "tags": "",
      "enum": {}
    },
    "1274": {
      "name": "DerivativeNTPositionLimit",
      "number": 1274,
      "tags": "",
      "enum": {}
    },
    "1275": {
      "name": "DerivativeIssuer",
      "number": 1275,
      "tags": "",
      "enum": {}
    },
    "1276": {
      "name": "DerivativeIssueDate",
      "number": 1276,
      "tags": "",
      "enum": {}
    },
    "1277": {
      "name": "DerivativeEncodedIssuerLen",
      "number": 1277,
      "tags": "",
      "enum": {}
    },
    "1278": {
      "name": "DerivativeEncodedIssuer",
      "number": 1278,
      "tags": "",
      "enum": {}
    },
    "1279": {
      "name": "DerivativeSecurityDesc",
      "number": 1279,
      "tags": "",
      "enum": {}
    },
    "1280": {
      "name": "DerivativeEncodedSecurityDescLen",
      "number": 1280,
      "tags": "",
      "enum": {}
    },
    "1281": {
      "name": "DerivativeEncodedSecurityDesc",
      "number": 1281,
      "tags": "",
      "enum": {}
    },
    "1282": {
      "name": "DerivativeSecurityXMLLen",
      "number": 1282,
      "tags": "",
      "enum": {}
    },
    "1283": {
      "name": "DerivativeSecurityXML",
      "number": 1283,
      "tags": "",
      "enum": {}
    },
    "1284": {
      "name": "DerivativeSecurityXMLSchema",
      "number": 1284,
      "tags": "",
      "enum": {}
    },
    "1285": {
      "name": "DerivativeContractSettlMonth",
      "number": 1285,
      "tags": "",
      "enum": {}
    },
    "1286": {
      "name": "NoDerivativeEvents",
      "number": 1286,
      "tags": "",
      "enum": {}
    },
    "1287": {
      "name": "DerivativeEventType",
      "number": 1287,
      "tags": "",
      "enum": {}
    },
    "1288": {
      "name": "DerivativeEventDate",
      "number": 1288,
      "tags": "",
      "enum": {}
    },
    "1289": {
      "name": "DerivativeEventTime",
      "number": 1289,
      "tags": "",
      "enum": {}
    },
    "1290": {
      "name": "DerivativeEventPx",
      "number": 1290,
      "tags": "",
      "enum": {}
    },
    "1291": {
      "name": "DerivativeEventText",
      "number": 1291,
      "tags": "",
      "enum": {}
    },
    "1292": {
      "name": "NoDerivativeInstrumentParties",
      "number": 1292,
      "tags": "",
      "enum": {}
    },
    "1293": {
      "name": "DerivativeInstrumentPartyID",
      "number": 1293,
      "tags": "",
      "enum": {}
    },
    "1294": {
      "name": "DerivativeInstrumentPartyIDSource",
      "number": 1294,
      "tags": "",
      "enum": {}
    },
    "1295": {
      "name": "DerivativeInstrumentPartyRole",
      "number": 1295,
      "tags": "",
      "enum": {}
    },
    "1296": {
      "name": "NoDerivativeInstrumentPartySubIDs",
      "number": 1296,
      "tags": "",
      "enum": {}
    },
    "1297": {
      "name": "DerivativeInstrumentPartySubID",
      "number": 1297,
      "tags": "",
      "enum": {}
    },
    "1298": {
      "name": "DerivativeInstrumentPartySubIDType",
      "number": 1298,
      "tags": "",
      "enum": {}
    },
    "1299": {
      "name": "DerivativeExerciseStyle",
      "number": 1299,
      "tags": "",
      "enum": {}
    },
    "1300": {
      "name": "MarketSegmentID",
      "number": 1300,
      "tags": "",
      "enum": {}
    },
    "1301": {
      "name": "MarketID",
      "number": 1301,
      "tags": "",
      "enum": {}
    },
    "1302": {
      "name": "MaturityMonthYearIncrementUnits",
      "number": 1302,
      "tags": "",
      "enum": {
        "0": "MONTHS",
        "1": "DAYS",
        "2": "WEEKS",
        "3": "YEARS"
      }
    },
    "1303": {
      "name": "MaturityMonthYearFormat",
      "number": 1303,
      "tags": "",
      "enum": {
        "0": "YEARMONTH_ONLY",
        "1": "YEARMONTHDAY",
        "2": "YEARMONTHWEEK"
      }
    },
    "1304": {
      "name": "StrikeExerciseStyle",
      "number": 1304,
      "tags": "",
      "enum": {}
    },
    "1305": {
      "name": "SecondaryPriceLimitType",
      "number": 1305,
      "tags": "",
      "enum": {}
    },
    "1306": {
      "name": "PriceLimitType",
      "number": 1306,
      "tags": "",
      "enum": {
        "0": "PRICE",
        "1": "TICKS",
        "2": "PERCENTAGE"
      }
    },
    "1308": {
      "name": "ExecInstValue",
      "number": 1308,
      "tags": "",
      "enum": {}
    },
    "1309": {
      "name": "NoTradingSessionRules",
      "number": 1309,
      "tags": "",
      "enum": {}
    },
    "1310": {
      "name": "NoMarketSegments",
      "number": 1310,
      "tags": "",
      "enum": {}
    },
    "1311": {
      "name": "NoDerivativeInstrAttrib",
      "number": 1311,
      "tags": "",
      "enum": {}
    },
    "1312": {
      "name": "NoNestedInstrAttrib",
      "number": 1312,
      "tags": "",
      "enum": {}
    },
    "1313": {
      "name": "DerivativeInstrAttribType",
      "number": 1313,
      "tags": "",
      "enum": {}
    },
    "1314": {
      "name": "DerivativeInstrAttribValue",
      "number": 1314,
      "tags": "",
      "enum": {}
    },
    "1315": {
      "name": "DerivativePriceUnitOfMeasure",
      "number": 1315,
      "tags": "",
      "enum": {}
    },
    "1316": {
      "name": "DerivativePriceUnitOfMeasureQty",
      "number": 1316,
      "tags": "",
      "enum": {}
    },
    "1317": {
      "name": "DerivativeSettlMethod",
      "number": 1317,
      "tags": "",
      "enum": {}
    },
    "1318": {
      "name": "DerivativePriceQuoteMethod",
      "number": 1318,
      "tags": "",
      "enum": {}
    },
    "1319": {
      "name": "DerivativeValuationMethod",
      "number": 1319,
      "tags": "",
      "enum": {}
    },
    "1320": {
      "name": "DerivativeListMethod",
      "number": 1320,
      "tags": "",
      "enum": {}
    },
    "1321": {
      "name": "DerivativeCapPrice",
      "number": 1321,
      "tags": "",
      "enum": {}
    },
    "1322": {
      "name": "DerivativeFloorPrice",
      "number": 1322,
      "tags": "",
      "enum": {}
    },
    "1323": {
      "name": "DerivativePutOrCall",
      "number": 1323,
      "tags": "",
      "enum": {}
    },
    "1324": {
      "name": "ListUpdateAction",
      "number": 1324,
      "tags": "",
      "enum": {}
    },
    "1325": {
      "name": "ParentMktSegmID",
      "number": 1325,
      "tags": "",
      "enum": {}
    },
    "1326": {
      "name": "TradingSessionDesc",
      "number": 1326,
      "tags": "",
      "enum": {}
    },
    "1327": {
      "name": "TradSesUpdateAction",
      "number": 1327,
      "tags": "",
      "enum": {}
    },
    "1328": {
      "name": "RejectText",
      "number": 1328,
      "tags": "",
      "enum": {}
    },
    "1329": {
      "name": "FeeMultiplier",
      "number": 1329,
      "tags": "",
      "enum": {}
    },
    "1330": {
      "name": "UnderlyingLegSymbol",
      "number": 1330,
      "tags": "",
      "enum": {}
    },
    "1331": {
      "name": "UnderlyingLegSymbolSfx",
      "number": 1331,
      "tags": "",
      "enum": {}
    },
    "1332": {
      "name": "UnderlyingLegSecurityID",
      "number": 1332,
      "tags": "",
      "enum": {}
    },
    "1333": {
      "name": "UnderlyingLegSecurityIDSource",
      "number": 1333,
      "tags": "",
      "enum": {}
    },
    "1334": {
      "name": "NoUnderlyingLegSecurityAltID",
      "number": 1334,
      "tags": "",
      "enum": {}
    },
    "1335": {
      "name": "UnderlyingLegSecurityAltID",
      "number": 1335,
      "tags": "",
      "enum": {}
    },
    "1336": {
      "name": "UnderlyingLegSecurityAltIDSource",
      "number": 1336,
      "tags": "",
      "enum": {}
    },
    "1337": {
      "name": "UnderlyingLegSecurityType",
      "number": 1337,
      "tags": "",
      "enum": {}
    },
    "1338": {
      "name": "UnderlyingLegSecuritySubType",
      "number": 1338,
      "tags": "",
      "enum": {}
    },
    "1339": {
      "name": "UnderlyingLegMaturityMonthYear",
      "number": 1339,
      "tags": "",
      "enum": {}
    },
    "1340": {
      "name": "UnderlyingLegStrikePrice",
      "number": 1340,
      "tags": "",
      "enum": {}
    },
    "1341": {
      "name": "UnderlyingLegSecurityExchange",
      "number": 1341,
      "tags": "",
      "enum": {}
    },
    "1342": {
      "name": "NoOfLegUnderlyings",
      "number": 1342,
      "tags": "",
      "enum": {}
    },
    "1343": {
      "name": "UnderlyingLegPutOrCall",
      "number": 1343,
      "tags": "",
      "enum": {}
    },
    "1344": {
      "name": "UnderlyingLegCFICode",
      "number": 1344,
      "tags": "",
      "enum": {}
    },
    "1345": {
      "name": "UnderlyingLegMaturityDate",
      "number": 1345,
      "tags": "",
      "enum": {}
    },
    "1346": {
      "name": "ApplReqID",
      "number": 1346,
      "tags": "",
      "enum": {}
    },
    "1347": {
      "name": "ApplReqType",
      "number": 1347,
      "tags": "",
      "enum": {
        "0": "RETRANSMISSION_OF_APPLICATION_MESSAGES_FOR_THE_SPECIFIED_APPLICATIONS",
        "1": "SUBSCRIPTION_TO_THE_SPECIFIED_APPLICATIONS",
        "2": "REQUEST_FOR_THE_LAST_APPLLASTSEQNUM_PUBLISHED_FOR_THE_SPECIFIED_APPLICATIONS",
        "3": "REQUEST_VALID_SET_OF_APPLICATIONS",
        "4": "UNSUBSCRIBE_TO_THE_SPECIFIED_APPLICATIONS",
        "5": "CANCEL_RETRANSMISSION",
        "6": "CANCEL_RETRANSMISSION_AND_UNSUBSCRIBE_TO_THE_SPECIFIED_APPLICATIONS"
      }
    },
    "1348": {
      "name": "ApplResponseType",
      "number": 1348,
      "tags": "",
      "enum": {
        "0": "REQUEST_SUCCESSFULLY_PROCESSED",
        "1": "APPLICATION_DOES_NOT_EXIST",
        "2": "MESSAGES_NOT_AVAILABLE"
      }
    },
    "1349": {
      "name": "ApplTotalMessageCount",
      "number": 1349,
      "tags": "",
      "enum": {}
    },
    "1350": {
      "name": "ApplLastSeqNum",
      "number": 1350,
      "tags": "",
      "enum": {}
    },
    "1351": {
      "name": "NoApplIDs",
      "number": 1351,
      "tags": "",
      "enum": {}
    },
    "1352": {
      "name": "ApplResendFlag",
      "number": 1352,
      "tags": "",
      "enum": {}
    },
    "1353": {
      "name": "ApplResponseID",
      "number": 1353,
      "tags": "",
      "enum": {}
    },
    "1354": {
      "name": "ApplResponseError",
      "number": 1354,
      "tags": "",
      "enum": {
        "0": "APPLICATION_DOES_NOT_EXIST",
        "1": "MESSAGES_REQUESTED_ARE_NOT_AVAILABLE",
        "2": "USER_NOT_AUTHORIZED_FOR_APPLICATION"
      }
    },
    "1355": {
      "name": "RefApplID",
      "number": 1355,
      "tags": "",
      "enum": {}
    },
    "1356": {
      "name": "ApplReportID",
      "number": 1356,
      "tags": "",
      "enum": {}
    },
    "1357": {
      "name": "RefApplLastSeqNum",
      "number": 1357,
      "tags": "",
      "enum": {}
    },
    "1358": {
      "name": "LegPutOrCall",
      "number": 1358,
      "tags": "",
      "enum": {}
    },
    "1361": {
      "name": "TotNoFills",
      "number": 1361,
      "tags": "",
      "enum": {}
    },
    "1362": {
      "name": "NoFills",
      "number": 1362,
      "tags": "",
      "enum": {}
    },
    "1363": {
      "name": "FillExecID",
      "number": 1363,
      "tags": "",
      "enum": {}
    },
    "1364": {
      "name": "FillPx",
      "number": 1364,
      "tags": "",
      "enum": {}
    },
    "1365": {
      "name": "FillQty",
      "number": 1365,
      "tags": "",
      "enum": {}
    },
    "1366": {
      "name": "LegAllocID",
      "number": 1366,
      "tags": "",
      "enum": {}
    },
    "1367": {
      "name": "LegAllocSettlCurrency",
      "number": 1367,
      "tags": "",
      "enum": {}
    },
    "1368": {
      "name": "TradSesEvent",
      "number": 1368,
      "tags": "",
      "enum": {
        "0": "TRADING_RESUMES",
        "1": "CHANGE_OF_TRADING_SESSION",
        "2": "CHANGE_OF_TRADING_SUBSESSION",
        "3": "CHANGE_OF_TRADING_STATUS"
      }
    },
    "1369": {
      "name": "MassActionReportID",
      "number": 1369,
      "tags": "",
      "enum": {}
    },
    "1370": {
      "name": "NoNotAffectedOrders",
      "number": 1370,
      "tags": "",
      "enum": {}
    },
    "1371": {
      "name": "NotAffectedOrderID",
      "number": 1371,
      "tags": "",
      "enum": {}
    },
    "1372": {
      "name": "NotAffOrigClOrdID",
      "number": 1372,
      "tags": "",
      "enum": {}
    },
    "1373": {
      "name": "MassActionType",
      "number": 1373,
      "tags": "",
      "enum": {
        "1": "SUSPEND_ORDERS",
        "2": "RELEASE_ORDERS_FROM_SUSPENSION",
        "3": "CANCEL_ORDERS"
      }
    },
    "1374": {
      "name": "MassActionScope",
      "number": 1374,
      "tags": "",
      "enum": {
        "1": "ALL_ORDERS_FOR_A_SECURITY",
        "2": "ALL_ORDERS_FOR_AN_UNDERLYING_SECURITY",
        "3": "ALL_ORDERS_FOR_A_PRODUCT",
        "4": "ALL_ORDERS_FOR_A_CFICODE",
        "5": "ALL_ORDERS_FOR_A_SECURITYTYPE",
        "6": "ALL_ORDERS_FOR_A_TRADING_SESSION",
        "7": "ALL_ORDERS",
        "8": "ALL_ORDERS_FOR_A_MARKET",
        "9": "ALL_ORDERS_FOR_A_MARKET_SEGMENT",
        "10": "ALL_ORDERS_FOR_A_SECURITY_GROUP",
        "11": "CANCEL_FOR_SECURITY_ISSUER",
        "12": "CANCEL_FOR_ISSUER_OF_UNDERLYING_SECURITY"
      }
    },
    "1375": {
      "name": "MassActionResponse",
      "number": 1375,
      "tags": "",
      "enum": {
        "0": "REJECTED_SEE_MASSACTIONREJECTREASON",
        "1": "ACCEPTED"
      }
    },
    "1376": {
      "name": "MassActionRejectReason",
      "number": 1376,
      "tags": "",
      "enum": {
        "0": "MASS_ACTION_NOT_SUPPORTED",
        "1": "INVALID_OR_UNKNOWN_SECURITY",
        "2": "INVALID_OR_UNKNOWN_UNDERLYING_SECURITY",
        "3": "INVALID_OR_UNKNOWN_PRODUCT",
        "4": "INVALID_OR_UNKNOWN_CFICODE",
        "5": "INVALID_OR_UNKNOWN_SECURITYTYPE",
        "6": "INVALID_OR_UNKNOWN_TRADING_SESSION",
        "7": "INVALID_OR_UNKNOWN_MARKET",
        "8": "INVALID_OR_UNKNOWN_MARKET_SEGMENT",
        "9": "INVALID_OR_UNKNOWN_SECURITY_GROUP",
        "10": "INVALID_OR_UNKNOWN_SECURITY_ISSUER",
        "11": "INVALID_OR_UNKNOWN_ISSUER_OF_UNDERLYING_SECURITY",
        "99": "OTHER"
      }
    },
    "1377": {
      "name": "MultilegModel",
      "number": 1377,
      "tags": "",
      "enum": {
        "0": "PREDEFINED_MULTILEG_SECURITY",
        "1": "USER_DEFINED_MULTLEG_SECURITY",
        "2": "USER_DEFINED_NON_SECURITIZED_MULTILEG"
      }
    },
    "1378": {
      "name": "MultilegPriceMethod",
      "number": 1378,
      "tags": "",
      "enum": {
        "0": "NET_PRICE",
        "1": "REVERSED_NET_PRICE",
        "2": "YIELD_DIFFERENCE",
        "3": "INDIVIDUAL",
        "4": "CONTRACT_WEIGHTED_AVERAGE_PRICE",
        "5": "MULTIPLIED_PRICE"
      }
    },
    "1379": {
      "name": "LegVolatility",
      "number": 1379,
      "tags": "",
      "enum": {}
    },
    "1380": {
      "name": "DividendYield",
      "number": 1380,
      "tags": "",
      "enum": {}
    },
    "1381": {
      "name": "LegDividendYield",
      "number": 1381,
      "tags": "",
      "enum": {}
    },
    "1382": {
      "name": "CurrencyRatio",
      "number": 1382,
      "tags": "",
      "enum": {}
    },
    "1383": {
      "name": "LegCurrencyRatio",
      "number": 1383,
      "tags": "",
      "enum": {}
    },
    "1384": {
      "name": "LegExecInst",
      "number": 1384,
      "tags": "",
      "enum": {}
    },
    "1385": {
      "name": "ContingencyType",
      "number": 1385,
      "tags": "",
      "enum": {
        "1": "ONE_CANCELS_THE_OTHER",
        "2": "ONE_TRIGGERS_THE_OTHER",
        "3": "ONE_UPDATES_THE_OTHER_ABSOLUTE_QUANTITY_REDUCTION",
        "4": "ONE_UPDATES_THE_OTHER_PROPORTIONAL_QUANTITY_REDUCTION"
      }
    },
    "1386": {
      "name": "ListRejectReason",
      "number": 1386,
      "tags": "",
      "enum": {
        "0": "BROKER_EXCHANGE_OPTION",
        "2": "EXCHANGE_CLOSED",
        "4": "TOO_LATE_TO_ENTER",
        "5": "UNKNOWN_ORDER",
        "6": "DUPLICATE_ORDER",
        "11": "UNSUPPORTED_ORDER_CHARACTERISTIC",
        "99": "OTHER"
      }
    },
    "1387": {
      "name": "NoTrdRepIndicators",
      "number": 1387,
      "tags": "",
      "enum": {}
    },
    "1388": {
      "name": "TrdRepPartyRole",
      "number": 1388,
      "tags": "",
      "enum": {}
    },
    "1389": {
      "name": "TrdRepIndicator",
      "number": 1389,
      "tags": "",
      "enum": {}
    },
    "1390": {
      "name": "TradePublishIndicator",
      "number": 1390,
      "tags": "",
      "enum": {
        "0": "DO_NOT_PUBLISH_TRADE",
        "1": "PUBLISH_TRADE",
        "2": "DEFERRED_PUBLICATION"
      }
    },
    "1391": {
      "name": "UnderlyingLegOptAttribute",
      "number": 1391,
      "tags": "",
      "enum": {}
    },
    "1392": {
      "name": "UnderlyingLegSecurityDesc",
      "number": 1392,
      "tags": "",
      "enum": {}
    },
    "1393": {
      "name": "MarketReqID",
      "number": 1393,
      "tags": "",
      "enum": {}
    },
    "1394": {
      "name": "MarketReportID",
      "number": 1394,
      "tags": "",
      "enum": {}
    },
    "1395": {
      "name": "MarketUpdateAction",
      "number": 1395,
      "tags": "",
      "enum": {
        "A": "ADD",
        "D": "DELETE",
        "M": "MODIFY"
      }
    },
    "1396": {
      "name": "MarketSegmentDesc",
      "number": 1396,
      "tags": "",
      "enum": {}
    },
    "1397": {
      "name": "EncodedMktSegmDescLen",
      "number": 1397,
      "tags": "",
      "enum": {}
    },
    "1398": {
      "name": "EncodedMktSegmDesc",
      "number": 1398,
      "tags": "",
      "enum": {}
    },
    "1399": {
      "name": "ApplNewSeqNum",
      "number": 1399,
      "tags": "",
      "enum": {}
    },
    "1400": {
      "name": "EncryptedPasswordMethod",
      "number": 1400,
      "tags": "",
      "enum": {}
    },
    "1401": {
      "name": "EncryptedPasswordLen",
      "number": 1401,
      "tags": "",
      "enum": {}
    },
    "1402": {
      "name": "EncryptedPassword",
      "number": 1402,
      "tags": "",
      "enum": {}
    },
    "1403": {
      "name": "EncryptedNewPasswordLen",
      "number": 1403,
      "tags": "",
      "enum": {}
    },
    "1404": {
      "name": "EncryptedNewPassword",
      "number": 1404,
      "tags": "",
      "enum": {}
    },
    "1405": {
      "name": "UnderlyingLegMaturityTime",
      "number": 1405,
      "tags": "",
      "enum": {}
    },
    "1406": {
      "name": "RefApplExtID",
      "number": 1406,
      "tags": "",
      "enum": {}
    },
    "1407": {
      "name": "DefaultApplExtID",
      "number": 1407,
      "tags": "",
      "enum": {}
    },
    "1408": {
      "name": "DefaultCstmApplVerID",
      "number": 1408,
      "tags": "",
      "enum": {}
    },
    "1409": {
      "name": "SessionStatus",
      "number": 1409,
      "tags": "",
      "enum": {
        "0": "SESSION_ACTIVE",
        "1": "SESSION_PASSWORD_CHANGED",
        "2": "SESSION_PASSWORD_DUE_TO_EXPIRE",
        "3": "NEW_SESSION_PASSWORD_DOES_NOT_COMPLY_WITH_POLICY",
        "4": "SESSION_LOGOUT_COMPLETE",
        "5": "INVALID_USERNAME_OR_PASSWORD",
        "6": "ACCOUNT_LOCKED",
        "7": "LOGONS_ARE_NOT_ALLOWED_AT_THIS_TIME",
        "8": "PASSWORD_EXPIRED"
      }
    },
    "1410": {
      "name": "DefaultVerIndicator",
      "number": 1410,
      "tags": "",
      "enum": {}
    },
    "1411": {
      "name": "Nested4PartySubIDType",
      "number": 1411,
      "tags": "",
      "enum": {}
    },
    "1412": {
      "name": "Nested4PartySubID",
      "number": 1412,
      "tags": "",
      "enum": {}
    },
    "1413": {
      "name": "NoNested4PartySubIDs",
      "number": 1413,
      "tags": "",
      "enum": {}
    },
    "1414": {
      "name": "NoNested4PartyIDs",
      "number": 1414,
      "tags": "",
      "enum": {}
    },
    "1415": {
      "name": "Nested4PartyID",
      "number": 1415,
      "tags": "",
      "enum": {}
    },
    "1416": {
      "name": "Nested4PartyIDSource",
      "number": 1416,
      "tags": "",
      "enum": {}
    },
    "1417": {
      "name": "Nested4PartyRole",
      "number": 1417,
      "tags": "",
      "enum": {}
    },
    "1418": {
      "name": "LegLastQty",
      "number": 1418,
      "tags": "",
      "enum": {}
    },
    "1419": {
      "name": "UnderlyingExerciseStyle",
      "number": 1419,
      "tags": "",
      "enum": {}
    },
    "1420": {
      "name": "LegExerciseStyle",
      "number": 1420,
      "tags": "",
      "enum": {}
    },
    "1421": {
      "name": "LegPriceUnitOfMeasure",
      "number": 1421,
      "tags": "",
      "enum": {}
    },
    "1422": {
      "name": "LegPriceUnitOfMeasureQty",
      "number": 1422,
      "tags": "",
      "enum": {}
    },
    "1423": {
      "name": "UnderlyingUnitOfMeasureQty",
      "number": 1423,
      "tags": "",
      "enum": {}
    },
    "1424": {
      "name": "UnderlyingPriceUnitOfMeasure",
      "number": 1424,
      "tags": "",
      "enum": {}
    },
    "1425": {
      "name": "UnderlyingPriceUnitOfMeasureQty",
      "number": 1425,
      "tags": "",
      "enum": {}
    },
    "1426": {
      "name": "ApplReportType",
      "number": 1426,
      "tags": "",
      "enum": {
        "0": "RESET_APPLSEQNUM_TO_NEW_VALUE_SPECIFIED_IN_APPLNEWSEQNUM",
        "1": "REPORTS_THAT_THE_LAST_MESSAGE_HAS_BEEN_SENT_FOR_THE_APPLIDS_REFER_TO_REFAPPLLASTSEQNUM_FOR_THE_APPLICATION_SEQUENCE_NUMBER_OF_THE_LAST_MESSAGE_",
        "2": "HEARTBEAT_MESSAGE_INDICATING_THAT_APPLICATION_IDENTIFIED_BY_REFAPPLID_FOR_THE_APPLICATION_SEQUENCE_NUMBER_OF_THE_PREVIOUS_MESSAGE_",
        "3": "APPLICATION_MESSAGE_RE_SEND_COMPLETED_"
      }
    },
    "1427": {
      "name": "SideExecID",
      "number": 1427,
      "tags": "",
      "enum": {}
    },
    "1428": {
      "name": "OrderDelay",
      "number": 1428,
      "tags": "",
      "enum": {}
    },
    "1429": {
      "name": "OrderDelayUnit",
      "number": 1429,
      "tags": "",
      "enum": {
        "0": "SECONDS",
        "1": "TENTHS_OF_A_SECOND",
        "2": "HUNDREDTHS_OF_A_SECOND",
        "3": "MILLISECONDS",
        "4": "MICROSECONDS",
        "5": "NANOSECONDS",
        "10": "MINUTES",
        "11": "HOURS",
        "12": "DAYS",
        "13": "WEEKS",
        "14": "MONTHS",
        "15": "YEARS"
      }
    },
    "1430": {
      "name": "VenueType",
      "number": 1430,
      "tags": "",
      "enum": {
        "E": "ELECTRONIC",
        "P": "PIT",
        "X": "EX_PIT"
      }
    },
    "1431": {
      "name": "RefOrdIDReason",
      "number": 1431,
      "tags": "",
      "enum": {
        "0": "GTC_FROM_PREVIOUS_DAY",
        "1": "PARTIAL_FILL_REMAINING",
        "2": "ORDER_CHANGED"
      }
    },
    "1432": {
      "name": "OrigCustOrderCapacity",
      "number": 1432,
      "tags": "",
      "enum": {
        "1": "MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT",
        "2": "CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT",
        "3": "MEMBER_TRADING_FOR_ANOTHER_MEMBER",
        "4": "ALL_OTHER"
      }
    },
    "1433": {
      "name": "RefApplReqID",
      "number": 1433,
      "tags": "",
      "enum": {}
    },
    "1434": {
      "name": "ModelType",
      "number": 1434,
      "tags": "",
      "enum": {
        "0": "UTILITY_PROVIDED_STANDARD_MODEL",
        "1": "PROPRIETARY_MODEL"
      }
    },
    "1435": {
      "name": "ContractMultiplierUnit",
      "number": 1435,
      "tags": "",
      "enum": {
        "0": "SHARES",
        "1": "HOURS",
        "2": "DAYS"
      }
    },
    "1436": {
      "name": "LegContractMultiplierUnit",
      "number": 1436,
      "tags": "",
      "enum": {}
    },
    "1437": {
      "name": "UnderlyingContractMultiplierUnit",
      "number": 1437,
      "tags": "",
      "enum": {}
    },
    "1438": {
      "name": "DerivativeContractMultiplierUnit",
      "number": 1438,
      "tags": "",
      "enum": {}
    },
    "1439": {
      "name": "FlowScheduleType",
      "number": 1439,
      "tags": "",
      "enum": {
        "0": "NERC_EASTERN_OFF_PEAK",
        "1": "NERC_WESTERN_OFF_PEAK",
        "2": "NERC_CALENDAR_ALL_DAYS_IN_MONTH",
        "3": "NERC_EASTERN_PEAK",
        "4": "NERC_WESTERN_PEAK"
      }
    },
    "1440": {
      "name": "LegFlowScheduleType",
      "number": 1440,
      "tags": "",
      "enum": {}
    },
    "1441": {
      "name": "UnderlyingFlowScheduleType",
      "number": 1441,
      "tags": "",
      "enum": {}
    },
    "1442": {
      "name": "DerivativeFlowScheduleType",
      "number": 1442,
      "tags": "",
      "enum": {}
    },
    "1443": {
      "name": "FillLiquidityInd",
      "number": 1443,
      "tags": "",
      "enum": {}
    },
    "1444": {
      "name": "SideLiquidityInd",
      "number": 1444,
      "tags": "",
      "enum": {}
    },
    "1445": {
      "name": "NoRateSources",
      "number": 1445,
      "tags": "",
      "enum": {}
    },
    "1446": {
      "name": "RateSource",
      "number": 1446,
      "tags": "",
      "enum": {
        "0": "BLOOMBERG",
        "1": "REUTERS",
        "2": "TELERATE",
        "99": "OTHER"
      }
    },
    "1447": {
      "name": "RateSourceType",
      "number": 1447,
      "tags": "",
      "enum": {
        "0": "PRIMARY",
        "1": "SECONDARY"
      }
    },
    "1448": {
      "name": "ReferencePage",
      "number": 1448,
      "tags": "",
      "enum": {}
    },
    "1449": {
      "name": "RestructuringType",
      "number": 1449,
      "tags": "",
      "enum": {
        "FR": "FULL_RESTRUCTURING",
        "MR": "MODIFIED_RESTRUCTURING",
        "MM": "MODIFIED_MOD_RESTRUCTURING",
        "XR": "NO_RESTRUCTURING_SPECIFIED"
      }
    },
    "1450": {
      "name": "Seniority",
      "number": 1450,
      "tags": "",
      "enum": {
        "SD": "SENIOR_SECURED",
        "SR": "SENIOR",
        "SB": "SUBORDINATED"
      }
    },
    "1451": {
      "name": "NotionalPercentageOutstanding",
      "number": 1451,
      "tags": "",
      "enum": {}
    },
    "1452": {
      "name": "OriginalNotionalPercentageOutstanding",
      "number": 1452,
      "tags": "",
      "enum": {}
    },
    "1453": {
      "name": "UnderlyingRestructuringType",
      "number": 1453,
      "tags": "",
      "enum": {}
    },
    "1454": {
      "name": "UnderlyingSeniority",
      "number": 1454,
      "tags": "",
      "enum": {}
    },
    "1455": {
      "name": "UnderlyingNotionalPercentageOutstanding",
      "number": 1455,
      "tags": "",
      "enum": {}
    },
    "1456": {
      "name": "UnderlyingOriginalNotionalPercentageOutstanding",
      "number": 1456,
      "tags": "",
      "enum": {}
    },
    "1457": {
      "name": "AttachmentPoint",
      "number": 1457,
      "tags": "",
      "enum": {}
    },
    "1458": {
      "name": "DetachmentPoint",
      "number": 1458,
      "tags": "",
      "enum": {}
    },
    "1459": {
      "name": "UnderlyingAttachmentPoint",
      "number": 1459,
      "tags": "",
      "enum": {}
    },
    "1460": {
      "name": "UnderlyingDetachmentPoint",
      "number": 1460,
      "tags": "",
      "enum": {}
    },
    "1461": {
      "name": "NoTargetPartyIDs",
      "number": 1461,
      "tags": "",
      "enum": {}
    },
    "1462": {
      "name": "TargetPartyID",
      "number": 1462,
      "tags": "",
      "enum": {}
    },
    "1463": {
      "name": "TargetPartyIDSource",
      "number": 1463,
      "tags": "",
      "enum": {}
    },
    "1464": {
      "name": "TargetPartyRole",
      "number": 1464,
      "tags": "",
      "enum": {}
    },
    "1465": {
      "name": "SecurityListID",
      "number": 1465,
      "tags": "",
      "enum": {}
    },
    "1466": {
      "name": "SecurityListRefID",
      "number": 1466,
      "tags": "",
      "enum": {}
    },
    "1467": {
      "name": "SecurityListDesc",
      "number": 1467,
      "tags": "",
      "enum": {}
    },
    "1468": {
      "name": "EncodedSecurityListDescLen",
      "number": 1468,
      "tags": "",
      "enum": {}
    },
    "1469": {
      "name": "EncodedSecurityListDesc",
      "number": 1469,
      "tags": "",
      "enum": {}
    },
    "1470": {
      "name": "SecurityListType",
      "number": 1470,
      "tags": "",
      "enum": {
        "1": "INDUSTRY_CLASSIFICATION",
        "2": "TRADING_LIST",
        "3": "MARKET_MARKET_SEGMENT_LIST",
        "4": "NEWSPAPER_LIST"
      }
    },
    "1471": {
      "name": "SecurityListTypeSource",
      "number": 1471,
      "tags": "",
      "enum": {
        "1": "ICB_PUBLISHED_BY_DOW_JONES_AND_FTSE_WWW_ICBENCHMARK_COM",
        "2": "NAICS_WWW_CENSUS_GOV_NAICS_OR_WWW_NAICS_COM_",
        "3": "GICS_PUBLISHED_BY_STANDARDS_POOR"
      }
    },
    "1472": {
      "name": "NewsID",
      "number": 1472,
      "tags": "",
      "enum": {}
    },
    "1473": {
      "name": "NewsCategory",
      "number": 1473,
      "tags": "",
      "enum": {
        "0": "COMPANY_NEWS",
        "1": "MARKETPLACE_NEWS",
        "2": "FINANCIAL_MARKET_NEWS",
        "3": "TECHNICAL_NEWS",
        "99": "OTHER_NEWS"
      }
    },
    "1474": {
      "name": "LanguageCode",
      "number": 1474,
      "tags": "",
      "enum": {}
    },
    "1475": {
      "name": "NoNewsRefIDs",
      "number": 1475,
      "tags": "",
      "enum": {}
    },
    "1476": {
      "name": "NewsRefID",
      "number": 1476,
      "tags": "",
      "enum": {}
    },
    "1477": {
      "name": "NewsRefType",
      "number": 1477,
      "tags": "",
      "enum": {
        "0": "REPLACEMENT",
        "1": "OTHER_LANGUAGE",
        "2": "COMPLIMENTARY"
      }
    },
    "1478": {
      "name": "StrikePriceDeterminationMethod",
      "number": 1478,
      "tags": "",
      "enum": {
        "1": "FIXED_STRIKE",
        "2": "STRIKE_SET_AT_EXPIRATION_TO_UNDERLYING_OR_OTHER_VALUE",
        "3": "STRIKE_SET_TO_AVERAGE_OF_UNDERLYING_SETTLEMENT_PRICE_ACROSS_THE_LIFE_OF_THE_OPTION",
        "4": "STRIKE_SET_TO_OPTIMAL_VALUE"
      }
    },
    "1479": {
      "name": "StrikePriceBoundaryMethod",
      "number": 1479,
      "tags": "",
      "enum": {
        "1": "LESS_THAN_UNDERLYING_PRICE_IS_IN_THE_MONEY",
        "2": "LESS_THAN_OR_EQUAL_TO_THE_UNDERLYING_PRICE_IS_IN_THE_MONEY",
        "3": "EQUAL_TO_THE_UNDERLYING_PRICE_IS_IN_THE_MONEY",
        "4": "GREATER_THAN_OR_EQUAL_TO_UNDERLYING_PRICE_IS_IN_THE_MONEY",
        "5": "GREATER_THAN_UNDERLYING_IS_IN_THE_MONEY"
      }
    },
    "1480": {
      "name": "StrikePriceBoundaryPrecision",
      "number": 1480,
      "tags": "",
      "enum": {}
    },
    "1481": {
      "name": "UnderlyingPriceDeterminationMethod",
      "number": 1481,
      "tags": "",
      "enum": {
        "1": "REGULAR",
        "2": "SPECIAL_REFERENCE",
        "3": "OPTIMAL_VALUE",
        "4": "AVERAGE_VALUE"
      }
    },
    "1482": {
      "name": "OptPayoutType",
      "number": 1482,
      "tags": "",
      "enum": {
        "1": "VANILLA",
        "2": "CAPPED",
        "3": "BINARY"
      }
    },
    "1483": {
      "name": "NoComplexEvents",
      "number": 1483,
      "tags": "",
      "enum": {}
    },
    "1484": {
      "name": "ComplexEventType",
      "number": 1484,
      "tags": "",
      "enum": {
        "1": "CAPPED",
        "2": "TRIGGER",
        "3": "KNOCK_IN_UP",
        "4": "KOCK_IN_DOWN",
        "5": "KNOCK_OUT_UP",
        "6": "KNOCK_OUT_DOWN",
        "7": "UNDERLYING",
        "8": "RESET_BARRIER",
        "9": "ROLLING_BARRIER"
      }
    },
    "1485": {
      "name": "ComplexOptPayoutAmount",
      "number": 1485,
      "tags": "",
      "enum": {}
    },
    "1486": {
      "name": "ComplexEventPrice",
      "number": 1486,
      "tags": "",
      "enum": {}
    },
    "1487": {
      "name": "ComplexEventPriceBoundaryMethod",
      "number": 1487,
      "tags": "",
      "enum": {
        "1": "LESS_THAN_COMPLEXEVENTPRICE",
        "2": "LESS_THAN_OR_EQUAL_TO_COMPLEXEVENTPRICE",
        "3": "EQUAL_TO_COMPLEXEVENTPRICE",
        "4": "GREATER_THAN_OR_EQUAL_TO_COMPLEXEVENTPRICE",
        "5": "GREATER_THAN_COMPLEXEVENTPRICE"
      }
    },
    "1488": {
      "name": "ComplexEventPriceBoundaryPrecision",
      "number": 1488,
      "tags": "",
      "enum": {}
    },
    "1489": {
      "name": "ComplexEventPriceTimeType",
      "number": 1489,
      "tags": "",
      "enum": {
        "1": "EXPIRATION",
        "2": "IMMEDIATE",
        "3": "SPECIFIED_DATE_TIME"
      }
    },
    "1490": {
      "name": "ComplexEventCondition",
      "number": 1490,
      "tags": "",
      "enum": {
        "1": "AND",
        "2": "OR"
      }
    },
    "1491": {
      "name": "NoComplexEventDates",
      "number": 1491,
      "tags": "",
      "enum": {}
    },
    "1492": {
      "name": "ComplexEventStartDate",
      "number": 1492,
      "tags": "",
      "enum": {}
    },
    "1493": {
      "name": "ComplexEventEndDate",
      "number": 1493,
      "tags": "",
      "enum": {}
    },
    "1494": {
      "name": "NoComplexEventTimes",
      "number": 1494,
      "tags": "",
      "enum": {}
    },
    "1495": {
      "name": "ComplexEventStartTime",
      "number": 1495,
      "tags": "",
      "enum": {}
    },
    "1496": {
      "name": "ComplexEventEndTime",
      "number": 1496,
      "tags": "",
      "enum": {}
    },
    "1497": {
      "name": "StreamAsgnReqID",
      "number": 1497,
      "tags": "",
      "enum": {}
    },
    "1498": {
      "name": "StreamAsgnReqType",
      "number": 1498,
      "tags": "",
      "enum": {
        "1": "STREAM_ASSIGNMENT_FOR_NEW_CUSTOMER",
        "2": "STREAM_ASSIGNMENT_FOR_EXISTING_CUSTOMER"
      }
    },
    "1499": {
      "name": "NoAsgnReqs",
      "number": 1499,
      "tags": "",
      "enum": {}
    },
    "1500": {
      "name": "MDStreamID",
      "number": 1500,
      "tags": "",
      "enum": {}
    },
    "1501": {
      "name": "StreamAsgnRptID",
      "number": 1501,
      "tags": "",
      "enum": {}
    },
    "1502": {
      "name": "StreamAsgnRejReason",
      "number": 1502,
      "tags": "",
      "enum": {
        "0": "UNKNOWN_CLIENT",
        "1": "EXCEEDS_MAXIMUM_SIZE",
        "2": "UNKNOWN_OR_INVALID_CURRENCY_PAIR",
        "3": "NO_AVAILABLE_STREAM",
        "99": "OTHER"
      }
    },
    "1503": {
      "name": "StreamAsgnAckType",
      "number": 1503,
      "tags": "",
      "enum": {
        "0": "ASSIGNMENT_ACCEPTED",
        "1": "ASSIGNMENT_REJECTED"
      }
    },
    "1504": {
      "name": "RelSymTransactTime",
      "number": 1504,
      "tags": "",
      "enum": {}
    },
    "1617": {
      "name": "StreamAsgnType",
      "number": 1617,
      "tags": "",
      "enum": {
        "1": "ASSIGNMENT",
        "2": "REJECTED",
        "3": "TERMINATE_UNASSIGN"
      }
    },
    "5450": {
      "name": "MDElementName",
      "number": 5450,
      "tags": "",
      "enum": {
        "1": "BEST_BID",
        "2": "BEST_OFFER",
        "11": "PAID",
        "12": "GIVEN",
        "45": "DEALABLE_BID",
        "46": "DEALABLE_OFFER",
        "47": "LOCAL_BID",
        "48": "LOCAL_OFFER",
        "49": "DEALABLE_REGULAR_BID",
        "50": "DEALABLE_REGULAR_OFFER",
        "51": "DEALABLE_OUTSIDE_BID",
        "52": "DEALABLE_OUTSIDE_OFFER",
        "53": "DEALABLE_PLUS_BID",
        "54": "DEALABLE_PLUS_OFFER"
      }
    },
    "8000": {
      "name": "SimulatedTime",
      "number": 8000,
      "tags": "",
      "enum": {}
    },
    "9000": {
      "name": "NoNestedUserData",
      "number": 9000,
      "tags": "",
      "enum": {}
    },
    "9001": {
      "name": "NestedUserDataName",
      "number": 9001,
      "tags": "",
      "enum": {}
    },
    "9002": {
      "name": "NestedUserDataValue",
      "number": 9002,
      "tags": "",
      "enum": {}
    },
    "9995": {
      "name": "SpotValueDateForNDF",
      "number": 9995,
      "tags": "",
      "enum": {}
    }
  }
}

exports.fixdict = fixdict;
