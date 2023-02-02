# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add custom Agent ID to the Agents table
  
#### Acceptance Criteria:

 - The **Agents** table in the database should have a new column to store
   the custom **Agent ID** assigned by each **Facility**.
  - The new column should be named `custom_agent_id` for a consistent
   naming convention.
  - The new column should have a unique constraint to avoid duplicate
   custom **Agent IDs** for the same **Agent** across different **Facilities**.
   - The data type of the new column should be able to store alphanumeric
   characters of variable length.
  
   *Time/Effort estimate: **1 hour***

#### Implementation details:

 1.  Access the database and create a new column in the **Agents** table
    named    `custom_agent_id`.
 3. Define the data type for the new column, which should be able to   
   store alphanumeric characters of variable length.
 4. Add a unique constraint to the new column to ensure that each custom 
   **Agent ID** is unique for each **Agent** within a **Facility**.
 5. Update the code that saves new Agents to the database to ensure that 
   the custom **Agent ID** is stored in the new column when it is provided  
   by the **Facility**.
 6. Verify that the new column has been added successfully and that the  
   unique constraint is working as expected.

### Ticket 2: Use custom Agent ID in the getShiftsByFacility function

#### Acceptance Criteria:

 - The `getShiftsByFacility` function should return the custom **Agent ID**,
   if it is available, instead of the internal database id.
 - If the custom **Agent ID** is not available, the internal database id
   should be returned as usual.
 - The output of the function should be an array of **Shift** objects, each
   of which includes the custom **Agent ID** (if available) and other **Shift**
   metadata.

*Time/Effort estimate: **1-2 hours***

#### Implementation details:

 1. Access the code for the `getShiftsByFacility` function.
 2. Modify the function to join the **Agents** and **Shifts** tables on the
    **Agent ID**.
 3. Update the function to return the custom **Agent ID**, if it is
    available, instead of the internal database id. If the custom **Agent
    ID** is not available, the internal database id should be returned as
    usual.
 4. Update the test case of the function to reflect the changes.
 5. Run the test to ensure that it is returning the correct custom
    **Agent ID** (if available) and other **Shift** metadata.
    
### Ticket 3: Use custom Agent ID in the `generateReport` function

#### Acceptance Criteria:

 - The `generateReport` function should use the custom **Agent ID**, if it is
   available, instead of the internal database id when generating the
   reports.
 - If the custom **Agent ID** is not available, the internal database id should be used as usual.
 - The generated report should be in PDF format and include all
   necessary information, including the custom **Agent ID** (if available)
   and the total number of hours worked by each **Agent**.

*Time/Effort estimate: **1-2 hours***

#### Implementation details:

 - Access the code for the `generateReport` function.
 - Modify the function to use the custom **Agent ID**, if it is available,
   instead of the internal database id when generating the reports. If
   the custom **Agent ID** is not available, the internal database id should
   be used as usual.
 - Test the function to ensure that the generated reports are correctly
   formatted and include all necessary information, including the custom
   **Agent ID** (if available) and the total number of hours worked by each
   **Agent**.

### Ticket 4: Test the new feature

#### Acceptance Criteria:

 - The reports generated by the new feature should contain the custom
   Agent ID, if it is available, instead of the internal database id.
 - The reports should be in PDF format and contain all necessary information, including the custom Agent ID (if available), the total number of hours worked by each Agent, and any other relevant information.
 - The custom Agent ID should be unique for each Agent within a Facility.
 - The generated reports should match the specifications provided by the client.

  

*Time/Effort estimate: **2-3 hours***

#### Implementation details:

 1. Create test data that includes both custom Agent IDs and internal
    database IDs for Agents.
 2. Call the getShiftsByFacility function to retrieve the Shift data for
    a given Facility.
 3. Call the `generateReport` function to generate the reports using the
        Shift data retrieved in the previous step.
 4. Verify that the reports contain the correct custom Agent ID, if it
        is available, instead of the internal database id.
 5. Verify that the reports are in PDF format and contain all necessary
        information, including the custom Agent ID (if available), the total
        number of hours worked by each Agent, and any other relevant
        information.
 6. Verify that the custom Agent ID is unique for each Agent within a Facility.
 7. Compare the generated reports to the specifications provided by the
    client to ensure they match.

 ### Ticket 5: Deploy the new feature

#### Acceptance Criteria:

- All test cases should pass.
- The new feature should be deployed successfully to the production environment.
- The feature should be available to all Facilities.
- The feature should be stable and free of any major bugs.

*Time/Effort estimate: **1-2 hours***

#### Implementation details:

 1. Verify that all tests for the new feature have been successfully
    completed.
 2. Deploy the code changes to the production environment.
 3. Verify that the new feature is available to all Facilities.
 4. Monitor the feature for any major bugs or stability issues.
 5. Address any issues that arise during the deployment process in a
    timely manner.
