import pyautogui as pag
from time import sleep
from sys import argv


pag.keyDown(argv[1])
sleep(0.15)
pag.keyUp(argv[1])
