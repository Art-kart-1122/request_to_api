Feature: Dropbox
  @get_metadata
  Scenario: Get file metadata
    Given I have '../../data/test_file.txt' file to upload
    When I try to create a folder '/test_folder'
    When I upload the file '../data/test_file.txt' '/test_folder/test_file.txt'
    When I try to get metadata '/test_folder/test_file.txt'
    Then request occurred without error

  @delete_file
  Scenario: Delete a file
    Given I have '/data/test_file.txt' file to upload
    When I try to create a folder '/test_folder'
    When I upload the file '/data/test_file.txt' '/test_folder/test_file.txt'
    When I perform a delete '/test_folder/test_file.pdf'
    Then request occurred without error

