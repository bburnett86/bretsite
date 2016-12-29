// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  $(".hero-text").hide(0).delay(500).fadeIn(3000);
  $(".headshot").hide(0).delay(500).fadeIn(3000);
  $('.about-me-col').hide(0).delay(500).fadeIn(3000);

  $("#about-me-tab-link").on("click", function(){
    event.preventDefault();
    var request = $.ajax({
      url:'articles/_about_me',
      method: 'get',
    });
    request.done(function(about_me_partial){
      $(".about-skills-container").empty();
      $(".about-skills-container").append(about_me_partial);
    });
  });


  $("#skills-tab").on("click", function(){
    event.preventDefault();
    $('.about-skills-container').empty();
    var request = $.ajax({
      url:'articles/_skills',
      method: 'get'
    })
    request.done(function(skills_partial){
      $(".about-skills-container").append(skills_partial);

    $('#skills-container').highcharts({
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Skills'
          },
          subtitle: {
              text: 'Programming Languages and Frameworks'
          },
          xAxis: {
              categories: ['Ruby On Rails', 'HTML5', 'CSS3', 'JavaScript', 'Ruby', 'Sinatra', 'Bootstrap CSS', 'REST', 'RESTful APIs', 'Agile Workflow', 'Wordpress', 'React', 'XML', 'ActiveRecord', 'GitHub', 'PostgreSQL'],
              title: {
                  text: null
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Comfort Level',
                  align: 'high'
              },
              labels: {
                  overflow: 'justify'
              }
          },
          tooltip: {
              valueSuffix: ' /100'
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
              shadow: true
          },
          credits: {
              enabled: false
          },
          series: [{
              name: 'Comfort Level',
              data: [85, 95, 95, 80, 90, 90, 90, 90, 80, 70, 65, 60, 80, 80,90, 70]
          }]
      });
    })
  });


});