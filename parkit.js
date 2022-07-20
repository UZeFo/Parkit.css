{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function readradius() \{\
  var radius=document.getElementById("radius")\
  alert(radius.value)\
\}\
\
document.getElementById("searchbtn").onclick = readradius;\
\
function checkbox() \{\
  var starlink = document.getElementById("op1")\
  var starlink1 = document.getElementById("op2")\
  var starlink2 = document.getElementById("op3")\
  var starlink3 = document.getElementById("op4")\
  var starlink4 = document.getElementById("op5")\
  alert('Cool')\
\}\
document.getElementById('op1').addEventListener('change', checkbox);}