import math


class Calculator:
    loan_stats = {}

    def __init__(self, principle):
        self.principle = principle
        self.monthly_payment = 0
        self.month_repay = 0

    def set_principle(self):
        self.loan_stats["Loan principal"] = self.principle

    def set_monthly_payment(self, month_number: str, payment: int):
        self.monthly_payment = payment
        self.loan_stats[month_number] = payment

    def num_month_repay(self, monthly_payment):
        self.month_repay = math.ceil(self.principle / monthly_payment)
        return self.month_repay

    def month_payment(self, month):
        monthly_pay = math.ceil(self.principle / month)
        last_pay = self.principle - (month - 1) * math.ceil(monthly_pay)
        return monthly_pay, last_pay

    def get_stats(self):
        return self.loan_stats
