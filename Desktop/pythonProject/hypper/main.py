def main():
    print_loan_data()


def loan(principal, first_month, second_month, third_month, final_output):
    request = Calculator()
    request.get_principal(principal)
    request.first_month(first_month)
    request.second_month(second_month)
    request.third_month(third_month)
    request.final_output(final_output)

    return request.get_data()


def print_loan_data():
    data = loan(1000, 250, 250, 250, "The loan has been repaid!")
    for d in data:
        print(f'{d}: {data[d]}')


class Calculator:
    def __init__(self):
        self.loan_principal = 0

    loan_data = {}

    def get_principal(self, principal):  # loan principal
        self.loan_principal = principal
        self.loan_data["loan_principal"] = self.loan_principal

    # get monthly payments
    def first_month(self, month):
        
        self.loan_data["first_month"] = month

    def second_month(self, month):
        self.loan_data["second_month"] = month

    def third_month(self, month):
        self.loan_data["third_month"] = month

    def final_output(self, msg):
        self.loan_data["final_output"] = msg

    def get_data(self):
        return self.loan_data


main()
