/*
 * SplashKit Graphics
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __graphics_h
#define __graphics_h
#include "types.h"

#include <string>
using std::string;


void clear_screen(color clr);
void refresh_screen();
void refresh_screen(unsigned int target_fps);
int screen_height();
int screen_width();

#endif /* __graphics_h */
