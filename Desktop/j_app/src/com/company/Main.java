package com.company;
//// Pizza bill generator app
//type of pizza
//add-ons
//add extras

import com.company.pizza.Pizza;

public class Main {

    public static void main(String[] args) {
        Pizza basePizza = new Pizza(true);
        basePizza.addExtraCheese(false);
        basePizza.addExtraTopping(false);
        basePizza.takeAway();
        basePizza.printBill();


    }
}
