import pyautogui as pag
from time import sleep
from sys import argv

mode = argv[1]

if mode == 'hit':
    pag.press('h')

elif mode == 'destroy':
    pag.keyDown('h')

elif mode == 'stop':
    pag.keyUp('h')

elif mode == 'inter':
    pag.press('j')

elif mode == 'rigth':
    pag.move(300, 0)

elif mode == 'left':
    pag.move(-300, 0)

elif mode == 'up':
    pag.move(0, -100)

elif mode == 'down':
    pag.move(0, 100)
