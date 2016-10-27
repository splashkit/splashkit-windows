/*
 * SplashKit Utils
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __utils_h
#define __utils_h

#include "resources.h"
#include <string>
#include <vector>
using std::string;
using std::vector;

unsigned int current_ticks();
void delay(unsigned int milliseconds);
string file_as_string(string filename, resource_kind kind);

#endif /* __utils_h */
