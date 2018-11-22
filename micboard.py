import threading
import os
import time


import config
import tornado_server
import shure
import discover

def main():
    config.config()

    time.sleep(.1)
    t1 = threading.Thread(target=shure.WirelessQueryQueue)
    t2 = threading.Thread(target=shure.SocketService)
    t3 = threading.Thread(target=tornado_server.twisted)
    t4 = threading.Thread(target=discover.discover)
    t5 = threading.Thread(target=shure.ProcessRXMessageQueue)
    t1.start()
    t2.start()
    t3.start()
    t4.start()
    t5.start()



if __name__ == '__main__':
    main()
