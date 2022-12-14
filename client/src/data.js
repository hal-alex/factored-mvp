
const testAdvances = [
    {
        id: 1111,
        advanceName: "Bathroom Renovation",
        advanceDescription: "Repairing boiler",
        reasonForAdvance: "Repairs",
        firstLine: "2 Test Street",
        secondLine: "",
        postcode: "TE1 2ST",
        townOrCity: "London",
        country: "UK",
        monthlyRent: 1000,
        leaseAgreement: "Test.pdf",
        rentProtection: "",
        tenantVetting: "",
        amountRentSelling: 5000,
        advanceDuration: 12,
        monthlyPayment: 475.20,
        yearlyInterestRate: 24.99,
        bankAccountName: "Mr Test User",
        bankAccountNumber: "1234567",
        bankAccountSortCode: "11-22-33",
        acceptTerms: false,
        fee: "2%",
        nextPaymentDate: "01-02-2023",
    },
    {
        id: 1112,
        advanceName: "New kitchen",
        advanceDescription: "Replacing old kitchen",
        reasonForAdvance: "Repairs",
        firstLine: "78 Test Avenue",
        secondLine: "",
        postcode: "KH1 9GL",
        townOrCity: "London",
        country: "UK",
        monthlyRent: 2000,
        leaseAgreement: "Test_agreement.pdf",
        rentProtection: "Test_rent_protection_policy.pdf",
        tenantVetting: "",
        amountRentSelling: 10000,
        advanceDuration: 36,
        monthlyPayment: 366.51,
        yearlyInterestRate: 18.99,
        bankAccountName: "Mr Another Test",
        bankAccountNumber: "9101112",
        bankAccountSortCode: "11-22-33",
        acceptTerms: false,
        fee: "1%",
        nextPaymentDate: "01-02-2023",
    },
    {
        id: 1113,
        advanceName: "Taking out equity",
        advanceDescription: "Paying off debt",
        reasonForAdvance: "Debt consolidation",
        firstLine: "Flat 2",
        secondLine: "90 Test Grove",
        postcode: "AH1 2AL",
        townOrCity: "London",
        country: "UK",
        monthlyRent: 1500,
        leaseAgreement: "Test_agreement.pdf",
        rentProtection: "Test_rent_protection_policy.pdf",
        tenantVetting: "",
        amountRentSelling: 18000,
        advanceDuration: 60,
        monthlyPayment: 409.46,
        yearlyInterestRate: 12.99,
        bankAccountName: "Mr Testing",
        bankAccountNumber: "1314151",
        bankAccountSortCode: "11-22-33",
        acceptTerms: false,
        fee: "0.5%",
        nextPaymentDate: "01-02-2023",
    },
]

const sampleUserObject = {
    id: "1",
    title: "Mr",
    firstName: "Test",
    authenticated: false,
    lastName: "User",
    emailAddress: "testing@gmail.com",
    ifVerified: false,
    hasAddressHistory: false,
    contactNumber: 0,
}

const templateAdvance = {
    stageOne: {
        advanceName: "",
        advanceDescription: "",
        reasonForAdvance: "",
        firstLine: "",
        secondLine: "",
        postcode: "",
        townOrCity: "",
        country: "",
        monthlyRent: 0,
    },
    stageTwo: {
        leaseAgreement: "",
        rentProtection: "",
        tenantVetting: "",
    },
    stageThree: {
        amountRentSelling: 0,
        advanceDuration: 0,
        monthlyPayment: 0,
        yearlyInterestRate: 0,
    },
    stageFour: {
        bankAccountName: "",
        bankAccountNumber: "",
        bankAccountSortCode: "",
    },
    conf: {
        acceptTerms: false,
    }
}

export { testAdvances, sampleUserObject, templateAdvance }