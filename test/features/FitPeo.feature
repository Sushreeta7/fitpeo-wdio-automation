Feature: FitPeo tests

  # Scenario:Adjust the slider value on revenue calculator page
  #   Given User navigates to Revenue Calculator page
  #   When Adjust the slider value to 820
  #   Then Verify that the value is set around 820


  # Scenario:Adjust the slider value on revenue calculator page
  #   Given User navigates to Revenue Calculator page
  #   When Adjust the slider value to 820
  #   Then Select all required CPT code checkboxes
  #     | CPT-99091 |
  #     | CPT-99453 |
  #     | CPT-99454 |
  #     | CPT-99474 |
  #   Then Verify total recurring reimbursements all patients


  Scenario:Adjust the slider value on revenue calculator page
    Given User navigates to Revenue Calculator page
    When Set the medical eligible input field value to 560
    Then Verify slider knob is positioned at 560
