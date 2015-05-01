/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  $(document).ready(function(){
    $(".item").click(function(){
        $(this).toggleClass("grey");
    });
    Interdimensional.charge({

  /**
   * Pixels per difference between tilts
   * @type {Number}
   */
  PPD: 0.8,

  /**
   * Minimum difference between tilts
   * @type {Number}
   */
  insensitivity: 5,

  /**
   * Use the control or not
   * @type {Boolean}
   */
  useControl: true,

  /**
   * Interdimensional control
   *
   * If null - default control will be used
   * control: document.getElementById('myControl')
   *
   * @type {HTMLElement|null}
   */
  control: null  
});
            $('.modal').addEventListener('interdimensional:charge', function() {
  Interdimensional.jump();
}, false);

     });    