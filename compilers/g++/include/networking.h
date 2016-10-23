/*
 * SplashKit Networking
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __networking_h
#define __networking_h

#include <string>
using std::string;


string dec_to_hex(unsigned int a_dec);
string hex_str_to_ipv4(const string &a_hex);
string hex_to_dec_string(const string &a_hex);
unsigned int ipv4_to_dec(const string &a_ip);
string ipv4_to_hex(const string &a_ip);
string ipv4_to_str(unsigned int ip);
string my_ip();

#endif /* __networking_h */
