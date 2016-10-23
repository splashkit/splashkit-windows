/*
 * SplashKit Collisions
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __collisions_h
#define __collisions_h
#include "matrix_2d.h"
#include "sprites.h"
#include "types.h"

#include <string>
using std::string;


bool bitmap_point_collision(bitmap bmp, const matrix_2d &translation, const point_2d &pt);
bool bitmap_point_collision(bitmap bmp, int cell, const matrix_2d &translation, const point_2d &pt);
bool sprite_collision(sprite s1, sprite s2);

#endif /* __collisions_h */
