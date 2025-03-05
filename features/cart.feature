Feature: Shopping Cart Functionality

  Scenario: Add and remove a product from the cart
    Given the user navigates to the home page
    When the user selects the "Women" category from the top menu
    And the user selects "Tops" from the sidebar category
    And the user selects a product from the product list
    And the user chooses a color
    And the user chooses a size
    And the user clicks "Add to Cart"
    And the user navigates to the cart via the top menu
    And the user clicks on "View and Edit Cart"
    And the user clicks on the trash icon of the product
    Then the cart should be empty
