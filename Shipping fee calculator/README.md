## Problem Statement
You have been given a catalogue of products with its name and dimensions (length, breadth, height) in centimeters and product procurement location. A customer places an order by choosing set of products and provides his delivery location. 


An order can contain repeated products.

A product can be available from multiple procurement locations. 

Assume source inventory is unlimited. 

Location should be modelled as coordinates like (x, y).


You need to calculate cheapest shipping fee for the order by using following rules. 

If products are being procured from same location then the products can be shipped together in a basket whose max volume capacity is 20,000 cc. 

Logistics also incur cost per unit distance travelled by the courier to deliver the package to the customer in accordance to a rate card. 

Shipment to a local customer within 5 unit radius of the point of procurement is free.

Shipping cost is calculated using packaging fees + logistics fees.

 	A basket packaging cost has a flat fare of 100 rupees. 

Packaging fees = (length * breadth * height ) / 100) rupees.

   

### Logistics Rate Card

Distance (units),  Rate (Rs/unit distance)

0-5,                   0
                
6-10  ,                6

11-*   ,               12


Distance should be calculated with the euclidean distance formula.

For an order with list of products and delivery location calculate and print shipping fee for any of the following probable scenarios and suggest the cheapest one.

#### May be shipped using basket

#### May be shipped without using basket

#### May be shipped using basket and individual shipments for large products.

## Sample catalogue

(product,length,breadth,height,Procurement location)

[p2,    250,    200,    200,      (20,5)]

[p1,    10,     5,      5,       (12, 5)]

[p3,    20,     10,     10,     (100, 5)]

[p5,    25,     10,     22,     (100, 5)]

[p4,    50,     75,     80,     (15, 78)]

[p1,    10,     5,      5,      (22, 50)]


Bonus question:
Consider packaging fees with handling attributes like fragile/flammable products.

Consider basketing option with nearby procurement locations.
