/**
 * Automated test for http://wowlogistics.com/
 *
 * > it navigates to wowlogistics.com
 */

module.exports = {
  'Load WOW Website' : function (client) {
    client
      .url('http://wowlogistics.com/')
      .waitForElementPresent('body', 1000);
  },

  'Test for footer content' : function(client) {
    client
      // .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      // .pause(1000)
      .assert.containsText('#PageFooter .copy', 'WOW Logistics')
      .end();
  }
};
