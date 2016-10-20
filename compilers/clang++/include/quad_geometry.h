/*
 * SplashKit Quad Geometry
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __quad_geometry_h
#define __quad_geometry_h
#include "matrix_2d.h"
#include "types.h"

#include <string>
using std::string;


quad quad_from(const rectangle &rect, const matrix_2d &transform);
quad quad_from(const rectangle &rect);
quad quad_from(float x_top_left, float y_top_left, float x_top_right, float y_top_right, float x_bottom_left, float y_bottom_left, float x_bottom_right, float y_bottom_right);

#endif /* __quad_geometry_h */
